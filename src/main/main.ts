import * as _        from 'lodash';
import Vue           from 'vue';
import Scroll_reveal from 'scrollreveal';

import router from './router';
import App    from './App.vue';

Vue.config.productionTip = false;

Scroll_reveal().reveal('.headline');

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    next()
});

router.afterEach((to, from) => {
    $(window).on('load', function() {
        $('body').removeAttr('load');
    });
});


/* if (module.hot) {
  module.hot.accept('.ts', function() {
      console.log('Accepting the updated printMe module!');
  })
} */