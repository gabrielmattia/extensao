import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsListPage from '../pages/ProjectsListPage.vue'
import ProjectInfoPage from '../pages/ProjectInfoPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsListPage,
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: ProjectInfoPage,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
