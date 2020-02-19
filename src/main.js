import Vue from 'vue';
import App from './App.vue';
import './filters';

import Tp1 from'./components/Tp1.vue'
import Lista from'./components/Lista.vue'

import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.use(VueRouter);
const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'atividades',
    component: Lista
  },
    {
    path: '/lista',
    name: 'filmes',
    component: Tp1
    },
]
})

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
