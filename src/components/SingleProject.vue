<template>
  <div @click="toggleOpen" class="project" :class="{complete : project.complete}">
      <div class="actions">
      <h3>{{project.title}}</h3>

      <div class="icons">
       <router-link :to="{ name: 'EditProject', params: {id: project.id}}">
         <span class="material-icons">
edit
</span></router-link>
          
<span @click="DeleteTask()" class="material-icons">
delete
</span>

<span @click="DoneTask()" class="material-icons" :class="{iconcompleted : project.complete}">
done
</span>
</div>
</div>
    <div class="details" v-if="detailsOpen">
          <p> {{project.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return{
            detailsOpen : false,
            
            uri: "http://localhost:5006/projects/" + this.project.id
        }
    },
    methods: {
        toggleOpen(){
            this.detailsOpen = !this.detailsOpen
        },
        DeleteTask() {
            fetch(this.uri, {method: 'DELETE'})
            .then(() => this.$emit('delete', this.project.id))
            .catch((err) => console.log(err.message))
        },
        DoneTask(){
           fetch(this.uri, {
         method: 'PATCH',
         headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify({ complete : !this.project.complete})
         }).then(() => {
             this.$emit('complete', this.project.id)
         }).catch((err) => console.log(err.message))
        }
    }
}
</script>

<style>
.project{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #e90074
}

h3 {
    cursor: pointer;
}

.actions{
    display : flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
  font-size: 24px;
    margin-left:  10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover{
    color: #777;
}

.project.complete{
        border-left: 4px solid #62dc11;
        text-decoration: line-through;
}

.iconcompleted{
    color: #62dc11;
}


</style>