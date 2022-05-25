<template>
   <form @submit.prevent="submitChange">
      <label>Title</label>
      <input class="input" type="text" required v-model="title">
      <label>Detaljer:</label>
      <textarea class="input" required v-model="details"></textarea>
      <button>Uppdatera</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: 'https://flashy-bolder-roar.glitch.me/projects/' + this.id,
        }
    },
    methods:{
        submitChange() {

            
        fetch(this.uri, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ title: this.title, details: this.details})
        }).then(() => 
        this.$router.push("/"))
        }
    },
 mounted() {
     fetch(this.uri)
     .then(res => res.json())
     .then(data => {
         console.log(data)
         this.title = data.title
         this.details = data.details
         this.update = {
            title: this.title,
            details: this.details}})    
 }
} 



</script>

<style>
form{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    max-width: 400px;
}

label{
    margin-top:20px;
    margin-bottom: 5px;
}

form button{
    margin: 0 auto;
    align-items: center;
    padding: 5px;
    text-align: center;
    margin-top: 10px;
    width: 50%;
    background-color: rgb(15, 183, 127);
    color: white;
    border-radius: 5px;
}
</style>
