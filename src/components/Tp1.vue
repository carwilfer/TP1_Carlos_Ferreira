<template>
  <div class="hello">
    
    <h1>Bem vindo a {{ title }}</h1>

    <h3 v-if="horas < 9" id="aberta"> Estamos funcionando!</h3>
    <h3 v-if="horas >= 12 && horas <= 13" id="almoco"> Estamos no horário de almoço!</h3>
    <h3 v-if="horas >= 13 && horas <= 18" id="retorno-almoco"> Voltamos!</h3>
    <h3 v-if="horas >= 18" id="fechada"> Estamos fechados!</h3>



    <div class="row">
        <div class="col">
          <h2>Filmes encontrados</h2>
          <button type="button" class="btn btn-primary btn-lg" @click="mostrarCarrinho">Carrinho: {{quantidadeNoCarrinho}} filmes</button>
        </div>
    </div>

    <div class="row" v-if="mostrarFilmes">
      <div class="col-3" v-bind:key="filme.id" v-for="filme in filmes">
        <div class="card">
          <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem do filme">
          <div class="card-body">
            <h5 class="card-title">{{ filme.titulo }}</h5>
            <p class="card-text" v-html="filme.descricao"></p>
            <p class="card-text">{{ filme.valor | formatarPreco("R$")}}</p>
            <a href="#" @click="adicionarAoCarrinho(filme)" v-if="validarPermissaoParaAdicionarNoCarrinho(filme)" class="btn btn-primary">Alugar</a>
            <a href="#" v-else class="btn btn-primary disabled">Alugar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else> <h2>Carrinho</h2>
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="pedido.primeiroNome">Primeiro nome</label>
            <input type="text" class="form-control" id="primeiroNome" placeholder="Digitar o primeiro nome" v-model="pedido.primeiroNome">
          </div>
          <div class="form-group">
            <label for="ultimo.ultimoNome">Último nome</label>
            <input type="text" class="form-control" id="ultimoNome" placeholder="Digitar o último nome" v-model="pedido.ultimoNome">
          </div>
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input type="text" class="form-control" id="endereco" placeholder="Digitar o endereço" v-model="pedido.endereco">
          </div>
          <div class="form-group">
            <label for="cidade">Cidade</label>
            <input type="text" class="form-control" id="cidade" placeholder="Digitar a cidade" v-model="pedido.cidade">
          </div>
          <div class="form-group">
            <label for="estado">Estado</label>
            <select class="form-control" id="estado" v-model="pedido.estado">
              <option disabled value>Escolha um estado</option>
              <option>RJ</option>
              <option>SP</option>
              <option>PR</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cep">CEP</label>
            <input type="text" class="form-control" id="cep" placeholder="Digitar o cep" v-model="pedido.cep">
          </div>
          <div class="form-goup">
            <button type="submit" class="btn btn-primary" v-on:click="submitFormulario">Finalizar pedido</button>
          </div>
        </form>
      </div>
      <div class="col-12">
        <pre>
          Primeiro nome: {{pedido.primeiroNome}}
          Último nome: {{pedido.ultimoNome}}
          Endereço: {{pedido.endereco}}
          Cidade: {{pedido.cidade}}
          Estado: {{pedido.estado}}
          CEP: {{pedido.cep}}
          Pago na entrega?: {{pedido.pagoNaEntrega}}
          Entrega: {{pedido.entrega}}

        </pre>
      </div>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="pagoNaEntrega" value="true" v-model="pedido.pagoNaEntrega">
      <label class="form-check-label" for="pagoNaEntrega">Pago na entrega?</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="manha" value="Manhã" v-model="pedido.entrega">
      <label class="form-check-label" for="manha">Manhã</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="tarde" value="Tarde" v-model="pedido.entrega">
      <label class="form-check-label" for="tarde">Tarde</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="noite" value="Noite" v-model="pedido.entrega">
      <label class="form-check-label" for="noite">Noite</label>
    </div>
 
  </div>
</template>



<script>
  export default {
    name: 'App', 
    data: function(){
      return {
        mostrarFilmes: true,
        title:"sua Locadora de filmes",
        horas: new Date().getHours(),
        pedido:{
          primeiroNome:"",
          ultimoNome:"",
          endereco:"",
          cidade:"",
          estado:"",
          cep:"",
          pagoNaEntrega: false,
          entrega:"Manhã"
        },

        filmes: [
          { id: 1, titulo: "Arlequina", descricao: "Depois de se aventurar com o Coringa, <b>Arlequina</b> se junta a <b>Canário Negro</b>, <b>Caçadora</b> e <b>Renee Montoya</b> para salvar a vida de uma garotinha do criminoso <b>Máscara Negra em Gotham City</b>", valor: 25, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPFvnrYm1PEtBb0Dbq527TYJ26sRXr6zKWyfTbbkHxJgkQpA4", estoqueFisponivel: 3 },
          { id: 2, titulo: "Mulher-Maravilha 2", descricao: "<b>Wonder Woman 1984</b> é um futuro filme estadunidense de super-herói de 2020, baseado na personagem homônima da <b>DC Comics</b> e distribuído pela <b>Warner Bros. Pictures</b>. 05/06/2020 ", valor: 35, imagem: "https://media1.popsugar-assets.com/files/thumbor/75Xa0OZOmMbTn8rblmFKrFxOaEc/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/09/659/n/1922283/4bd71b795dee5f188e2080.26134719_WW84_INSTA_V/i/Wonder-Woman-1984-Photos.jpg", estoqueFisponivel: 6  },
          { id: 3, titulo: "Viúva Negra", descricao: "<b>Black Widow</b> é um futuro filme estadunidense, baseado na personagem de mesmo nome da <b>Marvel Comics</b>, produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures", valor: 20, imagem: "https://legadodamarvel.com.br/wp-content/uploads/2019/09/Vi%C3%BAva-Negra-Demolidor-legadodamarvel.jpg", estoqueFisponivel: 2 },
          { id: 4, titulo: "Bad Boys para Sempre", descricao: "Os policiais <b>Mike Lowery e Marcus Burnett</b> se juntam para derrubar o líder de um cartel de drogas em Miami ao lado de <b>Mike e Marcus</b>, enfrenta o implacável Armando Armas.", valor: 40, imagem: "https://www.hojeemdia.com.br/polopoly_fs/1.769519.1580297506!/image/image.jpg_gen/derivatives/landscape_300/image.jpg", estoqueFisponivel: 8  }],

        carrinho: [],

        filters: {
          formatarPreco: function(preco, simbolo) {
            if(!parseInt(preco)) {
              return "";
            }
            var precoFormatado = (preco.toFixed(2)).replace('.', ',');
            return simbolo + " " + precoFormatado;
          }
        }
      };
    },
    methods: {
      mostrarCarrinho(){
        this.mostrarFilmes = this.mostrarFilmes ? false: true;
      },
      adicionarAoCarrinho: function(filme){
        this.carrinho.push(filme.id);
      },
      quantidadeNoCarrinhoPorFilme: function(filme){
        var quantidade = 0;
        for(var i = 0; i < this.carrinho.length; i++){
          if (filme.id == this.carrinho[i]){
            quantidade++;
          }
        }
        return quantidade;
      },
      validarPermissaoParaAdicionarNoCarrinho: function(filme){
        return filme.estoqueFisponivel > this.quantidadeNoCarrinhoPorFilme(filme);
      },
      submitFormulario(){
        alert('Pedido finalizado');
      },
    },
    computed:{
      quantidadeNoCarrinho: function(){
        return this.carrinho.length;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body{
  padding: 5px 0px 0px 15px;
  margin-inline-end: 15px;
  
}
.hello{
  padding: 10px;
  background-color: black;
}
.container-fluid{
  margin: 10px;
}
.form-group{
  padding: 20px;
  background-color: gray;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
