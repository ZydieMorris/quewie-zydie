import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue';

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/aboutus",
    component: () => import("./pages/AboutUs.vue")
  },
  {
    path: "/features",
    component: () => import("./pages/FeaturesPage.vue")
  },
  {
    path: "/solutions",
    component: () => import("./pages/SolutionsPage.vue")
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;