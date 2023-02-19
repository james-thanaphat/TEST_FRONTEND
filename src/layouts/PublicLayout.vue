<template>
  <div>
    <top-menu />
    <section class="container-fluid p-0">
      <slot />
    </section>
  </div>
</template>
  
<script>
import TopMenu from './TopMenu.vue';

export default {
  name: 'PublicLayout',
  components: { 
    TopMenu
  }
}
</script>
  
<style>
body {
  background: linear-gradient(180deg, #333333 0%, #000000 0.01%);
  font-family: 'Montserrat';
}
</style>  