<template>
  <div class="hello">
    <h1>Bem vindo a {{ title }}</h1>

    <div class="alerta alert-warning" role="alerta" v-show="tarefas.length === 0">
      Não há tarefas pendentes!
    </div>

    <div class="container-fluid">
      <table class="table table-striped" v-show="tarefas.length > 0">
        <thead>
          <tr>
            <td>#</td>
            <td>Descrição</td>
            <td>Está Completa</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(tarefa, index) in tarefas" v-bind:key="index">
            <td scope="row">{{tarefa.id}}</td>
            <td>{{tarefa.descricao}}</td>
            <td v-if="tarefa.estaCompleta ===true" class="status">
              <span class="badge badge-pill badge-info">Completa</span></td>
            <td v-else> 
              <span style="text-decoration:line-through">Incompleto</span>  
              <button class="btn btn-danger" v-on:click.prevent="retirar(index)">Remover</button>
            </td>
          </tr>
        </tbody>

      </table>    
    </div>

    <div class="form-group">
      <p>
        <input placeholder="n° ID" type="text" name="idTarefa" class="form-control" v-model="id">
      </p>

      <p>
        <input placeholder="Descrição" type="text" name="Tarefa" class="form-control" v-model="descricao">
      </p>

      <button class="btn btn-primary" v-on:click="adicionar()">adicionar</button>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'App', 
    data: function(){
      return {
        title:"sua área de tarefas",
        horas: new Date().getHours(),

        tarefas:[
          {id: 1, descricao: "Organizar o Site", estaCompleta: false},
          {id: 2, descricao: "Disponibilizar mais filmes", estaCompleta: true},
          ],
          id: '',
          descricao: '',
          estaCompleta: '',
      }
    },
    methods: {
      adicionar(){
        this.tarefas.push({ id: this.id, descricao: this.descricao, estaCompleta: ''});
        this.id = ''; this.descricao = '';
      },
      retirar(index){
        this.tarefas.splice(index, 1)
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body{
  padding: 25px 0px 0px 15px;
  margin-inline-end: 15px;
  
}
.hello{
  padding: 15px;
  background-color: gray;
}
.container-fluid{
  margin: 10px;
}
.form-group{
  padding: 5px;
  background-color: gray;
}
.status{

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
