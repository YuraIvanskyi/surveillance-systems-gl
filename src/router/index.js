import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/projects',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/project/:puid',
    name: 'Project',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue'),
  },
  {
    path: '/project/:puid/:platform/:servicename',
    name: 'Service',
    component: () => import(/* webpackChunkName: "about" */ '../views/Service.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
