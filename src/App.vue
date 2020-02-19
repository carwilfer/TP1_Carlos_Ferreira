<template>
  <div id="app" class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/shared/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#aberta {
  color: blue;
}
#almoco {
  color: brown;
}
#retorno-almoco {
  color: yellow;
}
#fechada {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
