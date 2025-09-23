import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue';
import AboutUs from './Pages/AboutUs.vue';
import FeaturesPage from './Pages/FeaturesPage.vue';
import SolutionsPage from './Pages/SolutionsPage.vue';

const routes = [
{
    path:"/",
    component: HomePage
},
{
  path:"/aboutus",
  component:AboutUs
},
{
  path:"/features",
  component:FeaturesPage
},
{
  path:"/solutions",
  component: SolutionsPage
}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;