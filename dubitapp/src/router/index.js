import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from "../views/LoginPage.vue"
import SignUpPage from "../views/SignUpPage.vue"
import StudentInfo from "../views/StudentInfo.vue"
import DoubtPage from "../views/DoubtPage.vue"
import Added from "../views/Added.vue"
import Profile from "../views/Profile.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/login',
    name:"login",
    component:LoginPage
  },
  {
    path:'/signup',
    name:"signup",
    component:SignUpPage
  },
  {
    path:"/info",
    name:"studentInfo",
    component:StudentInfo
  },
  {
    path:"/doubtpage",
    name:"doubtpage",
    component:DoubtPage
  },
  {
    path:"/successfully-added",
    name:"added",
    component:Added
  },
  {
    path:"/activity",
    name:"activity",
    component:Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
