import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/dashboard/About'
import Sermons from '@/components/dashboard/Sermons'
import Events from '@/components/dashboard/Events'
import Contact from '@/components/dashboard/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/sermons',
      name: 'Sermons',
      component: Sermons
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
