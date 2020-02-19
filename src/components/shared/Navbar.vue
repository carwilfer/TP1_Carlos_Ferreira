<template>
    <div>
      <b-navbar toggleable="md" type="light" variant="warning">
        <b-navbar-brand to="">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>         
            <b-nav-item v-on:click="routeToLista">Lista Filmes</b-nav-item>  
            <b-nav-item v-on:click="routeToTarefas">Tarefas</b-nav-item>
            <b-nav-item disabled>Filmes cult</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Busca"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Linguagem" right>
              <b-dropdown-item href="#">PT-BR</b-dropdown-item>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Login</em>
              </template>
              <b-dropdown-item href="#">Entrar</b-dropdown-item>
              <b-dropdown-item href="#">Sair</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
  export default {
    name: 'Navbar', 
    methods:{
      routeToLista: function(){
        this.$router.push('/lista')
      },
      routeToTarefas: function(){
        this.$router.push('/')
      }
    }
  }
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
