<template>
  <nav>
      <button 
      @click="updateFilter('all')"
      :class="{ active: current === 'all'}">
      Se alla</button>
      <button 
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed'}">
      Färdiga</button>
      <button 
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing'}">
      Pågående</button>



  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        updateFilter(by){
            this.$emit("filterChange", by)
        }
    }
}
</script>

<style>
button{
    border: none;
    background: none;
    color: rgb(161, 161, 161)
}

nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

.active{
    color: #555
}
</style>