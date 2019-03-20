import * as _ from 'lodash';
import Vue    from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function load_view(view: any) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`);
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: load_view('home'),
      meta: { title: 'Home' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: load_view('projects'),
      meta: { title: 'Projects' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: load_view('contact'),
      meta: { title: 'Contact' }
    }
  ]
});