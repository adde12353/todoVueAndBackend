<template>
  <form @submit.prevent="handleSubmit">
      <label>Titel:</label>
      <input class="input" type="text" required v-model="title">
      <label>Detaljer:</label>
      <textarea class="input" required v-model="details"></textarea>
      <button>Ad project</button>
  </form>

</template>

<script>
export default {
    data() {
        return{
            title: "",
            details: ""
        }
    },
    methods: {
        handleSubmit(){
            let project = {
                title: this.title,
                details: this.details,
                complete: false
            }
            console.log(project)
            fetch("http://localhost:5006/", 
            {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(project)
            }).then(() => {
    
                this.$router.push("/")
            }).catch(err => console.log(err.message))
        }
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
    font-size: 25px;
}

form input, textarea{
    font-size: 18px;
    border: 1px solid black;
    border-radius: 3px;
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