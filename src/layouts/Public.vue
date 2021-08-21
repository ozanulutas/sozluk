<template>
  <div class="public">
    <h1>public layout</h1>

    <Nav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'PublicLayout',
  
  components: {
    Nav
  },
};
</script>

<style>
  .public {
    background: rebeccapurple;
  }
</style>