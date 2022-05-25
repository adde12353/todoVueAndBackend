<script>
import Navbar from '../src/components/Navbar.vue'

export default {
  components: {Navbar}
}
</script>
<template>
  <Navbar/>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}


</style>
