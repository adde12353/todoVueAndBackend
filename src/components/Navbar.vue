<template>
  <nav class="main-nav">
      <router-link :to="{name: 'home'}">Projekt</router-link>
            <router-link :to="{name: 'create'}">Skapa</router-link>

  </nav>
</template>

<script>
export default
     {
         methods: {
             handleCompleded() {
                 
             }
         }
    }


</script>

<style>
    .main-nav{
        text-align: center;
        margin: 40px auto;
    }

    .main-nav a {
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 25px;
    }
    a.router-link-active{
        border-bottom: 2px solid greenyellow;
        padding-bottom: 4px
    }

    p{
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;

    }
</style>