import { createRouter, createWebHistory } from 'vue-router'
import IndexComponent from '@/views/IndexComponent.vue';
import BlogDetailsComponent from '@/views/BlogDetailsComponent.vue'
import ArticlesComponent from '@/views/ArticlesComponent.vue'
import ProjectComponent from '@/views/ProjectComponent.vue'
import ProjectDetails from '@/views/ProjectDetails.vue';
import NotFound from '@/views/NotFound.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexComponent
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: ArticlesComponent
  },
  {
    path: '/BlogDetails',
    name: 'BlogDetails',
    component: BlogDetailsComponent
  },
  {
    path: '/Project',
    name: 'Project',
    component: ProjectComponent
  },
  {
    path: '/ProjectDetails',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
