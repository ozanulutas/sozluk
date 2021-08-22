<template>
  <v-app>

    <AppBar @toggle-drawer="drawer = !drawer" :drawer="drawer" />

    <Drawer @update-drawer="updateDrawer" :drawer="drawer" />

    <!-- <v-main> -->
      <router-view></router-view>
    <!-- </v-main> -->
    
  </v-app>
</template>


<script>
import AppBar from '@/components/AppBar'
import Drawer from '@/components/Drawer'

export default {
  name: "App",

  components: {
    AppBar,
    Drawer,
  },

  data: () => ({
    drawer: null,
  }),

  methods: {
    updateDrawer(drawer) {
      this.drawer = drawer
    },
    
  }
};
</script>

