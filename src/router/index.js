import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/dashboard/About'
import Sermons from '@/components/dashboard/Sermons'
import Events from '@/components/dashboard/Events'
import Contact from '@/components/dashboard/Contact'
import Page404 from '@/components/dashboard/Page404'

// auth
import Login from '@/components/auth/Login'

// admin routes
import AdminHome from '@/components/admin/Home'
import AdminEvent from '@/components/admin/dashboard/Event'
import AdminMember from '@/components/admin/dashboard/Member'
import AdminSermon from '@/components/admin/dashboard/Sermon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
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
    {
      path: '/404-page-not-found',
      name: '404',
      component: Page404
    },
    { 
      path: '*', 
      redirect: '/404-page-not-found' 
    },

    // auth
    {
      path: '/signin',
      name: 'Login',
      component: Login
    },

    // admin
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AdminHome
    },
    {
      path: '/dashboard/events',
      name: 'AdminEvents',
      component: AdminEvent
    },
    {
      path: '/dashboard/members',
      name: 'AdminMembers',
      component: AdminMember
    },
    {
      path: '/dashboard/sermons',
      name: 'AdminSermons',
      component: AdminSermon
    },
  ]
})
