<template>
  <v-main>
    <h1>public layout</h1>

    <Nav />
    <!-- <v-main> -->
      <router-view></router-view>
    <!-- </v-main> -->
  </v-main>
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