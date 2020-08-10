<template>
  <div id="app">
    <menu-principal/>
    <router-view/>
    <Footer/>

  </div>

</template>

<script>
import MenuPrincipal from './components/MenuPrincipal.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    MenuPrincipal,
    Footer,
  }
}
</script>

<style>
</style>
