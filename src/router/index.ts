import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Auth from '../components/Auth/index.vue';
import Home from '../components/Home/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth/:component',
    name: 'Auth',
    component: Auth,
    props: true,
    beforeEnter: (to, from, next) => (localStorage.getItem('user') ? next(false) : next()),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
