<template>
  <v-app>

    <!-- <AppBar @toggle-drawer="drawer = !drawer" :drawer="drawer" />
    <Drawer @update-drawer="updateDrawer" :drawer="drawer" /> -->

    <router-view></router-view>
    
  </v-app>
</template>


<script>
// import AppBar from '@/components/AppBar'
// import Drawer from '@/components/Drawer'
// import drawerMixin from '@/mixins/drawer.js'

export default {
  name: "App",

  components: {
    // AppBar,
    // Drawer,
  },

  // mixins: [drawerMixin],

};
</script>

