<template>
  <v-main>
    <AppBar @toggle-drawer="drawer = !drawer" :drawer="drawer" />
    <Drawer @update-drawer="updateDrawer" :drawer="drawer" :items="drawerItems" :title="drawerTitle" />


    <h1>public layout</h1>
    <!-- <Nav /> -->
    <router-view></router-view>
  </v-main>
</template>

<script>
import AppBar from '@/components/AppBar'
import Drawer from '@/components/Drawer'
import drawerMixin from '@/mixins/drawer.js'
// import Nav from '@/components/Nav'

export default {
  name: 'PublicLayout',
  
  components: {
    AppBar,
    Drawer,
    // Nav
  },

  mixins: [drawerMixin],

  data: () => ({
    drawerItems: [{ title: "Konu 1", link: "/posts" }, { title: "Topic", link: "/topic" }, { title: "Profil", link: "/profile" }],
    drawerTitle: 'Kategori Başlığı',
  }),

};
</script>