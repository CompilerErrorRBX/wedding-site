import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import RSVP from './pages/RSVP.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/rsvp',
          name: 'rsvp',
          component: RSVP,
        },
      ],
    },
  ],
  mode: 'history',
});
