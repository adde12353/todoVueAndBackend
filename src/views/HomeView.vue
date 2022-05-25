
<template>
  <div class="home">
            <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filterList" :key="project">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { SingleProject, FilterNav
  }, 
   data(){
    return{
      projects : [],
      current: 'all'
    }
  },
  mounted(){
    fetch("http://localhost:5006/")
    .then((res) => { 
    console.log(res)
    return res.json()
    } 
      
    ).then((data) =>
        this.projects = data.projects
        )
        .catch(err => console.log(err.message))
 },

  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => 
      {return project.id !== id}
      )
    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed: {
    filterList(){
  
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }else if(this.current === 'ongoing')
      {return this.projects.filter(project => !project.complete)
}
      return this.projects
    }
  }
}
</script>
