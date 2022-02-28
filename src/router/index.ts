import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
console.log(first)
const routes: Array<RouteConfig> = [

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }import { log } from '../../../../../02/02-02-study-materials/codes/02-02-03-01-rollup-demo/07-multi-entry/src/logger';

]

const router = new VueRouter({
  routes
})

export default router
