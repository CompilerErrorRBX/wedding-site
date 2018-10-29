import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Registry from './pages/Registry.vue';
import RSVPs from './pages/RSVPs.vue';

import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/registry',
      name: 'registry',
      component: Registry,
      beforeEnter: (to, origin, next) => {
        store.dispatch('getRegistries');
        next();
      },
    },
    {
      path: '/rsvps',
      name: 'rsvps',
      component: RSVPs,
      beforeEnter: (to, origin, next) => {
        store.dispatch('getRSVPs');
        next();
      },
    },
  ],
  mode: 'history',
});
