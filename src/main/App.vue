<template>
  <!--─────────────────────────────────────────────────
    ─ app
  ──────────────────────────────────────────────────-->
  <div id="app">
    <!--─────────────────────────────────────────────────
      ─ nav menu
    ──────────────────────────────────────────────────-->
    <nav>
      <ul>
        <li><router-link class="nav-link" to="/projects">PROJECTS</router-link></li>
        <li><router-link class="nav-link" to="/"><svgLogo /></router-link></li>
        <li><router-link class="nav-link" to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>


    <!--─────────────────────────────────────────────────
      ─ container
    ──────────────────────────────────────────────────-->
    <div class="container">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>


<!--─────────────────────────────────────────────────
  ─ vue
──────────────────────────────────────────────────-->
<script>
  /*──────────────────────────────────────────────────
    ─ import scss
  ──────────────────────────────────────────────────*/
  import scss_main from '@/scss/main.scss';
  import scss_app  from '@/scss/app.scss';


  /*──────────────────────────────────────────────────
    ─ import svg
  ──────────────────────────────────────────────────*/
  import svgLogo from '@/graphic/svg/logo_color.svg';


  /*──────────────────────────────────────────────────
      ─ export
  ──────────────────────────────────────────────────*/
  export default {
    name: 'App',
    data() {
      return {
        prevHeight: 0
      }
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        const { height } = getComputedStyle(element);

        element.style.height = this.prevHeight;

        /* setTimeout(() => {
          element.style.height = height;
        }); */
      },
      afterEnter(element) {
        element.style.height = '100vh';
      },
    },
    components: {
      svgLogo
    }
  }
</script>