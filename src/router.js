import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from './components/Login.vue'
import Adocao from './components/Adocao.vue'
import Perdidos from './components/Perdidos.vue'
import Sobre from './components/Sobre.vue'
import ComoAdotar from './components/ComoAdotar.vue'
import FormAdocao from './components/FormAdocao.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/adocao', component: Adocao },
    { path: '/perdidos', component: Perdidos },
    { path: '/sobre', component: Sobre },
    { path: '/', component: ComoAdotar },
    { path: '/pedAdocao', component: FormAdocao },
  ]
})