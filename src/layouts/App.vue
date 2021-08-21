<template>
  <div class="app">
    <h1>app layout</h1>
    <Nav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: "AppLayout",

  components: {
    Nav
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  background: rosybrown;
}
</style>
