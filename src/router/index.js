import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdProject from '../views/AdProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/create',
    name: 'create',
    component: AdProject
  },{
    path: '/projects/:id',
    name: 'EditProject',
    component:EditProject,
    props: true
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
