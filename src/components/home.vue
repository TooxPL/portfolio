<template>
  <div>
    <svgLogoTransparent id="background_logo"/>


    <!--─────────────────────────────────────────────────
      ─ header || center panel
    ──────────────────────────────────────────────────-->
    <header>
      <span>I'm</span>
      <h1>KAMIL <p>SOHLICH</p></h1>
      <span>web developer</span>
    </header>


    <!--─────────────────────────────────────────────────
      ─ work button || bottom button
    ──────────────────────────────────────────────────-->
    <div id="work_button">
      <span>WORKS</span>
      <span>⭘</span>
    </div>
    

    <!--─────────────────────────────────────────────────
      ─ bottom info || bottom text
    ──────────────────────────────────────────────────-->
    <div id="bottom_info">
      <span>Kamil Sohlich © 2019</span>
      <span>This website uses <span>cookie</span></span>
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
  import css_home from '@/scss/components/home.scss';


  /*──────────────────────────────────────────────────
    ─ import svg
  ──────────────────────────────────────────────────*/
  import svgLogoTransparent from '@/graphic/svg/logo_color_transparent.svg';


  /*──────────────────────────────────────────────────
    ─ export
  ──────────────────────────────────────────────────*/
  export default {
      name: 'home',
      data() {
        return {
          title: 'home'
        }
      },
      beforeCreate() {
        document.body.className = 'home'
      },
      components: {
        svgLogoTransparent
      }
    }
</script>
