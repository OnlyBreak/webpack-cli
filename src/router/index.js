import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

export default new Router({
  routes
})
