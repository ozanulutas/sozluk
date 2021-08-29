<template>
  <v-main>
    <AppBar @toggle-drawer="drawer = !drawer" :drawer="drawer" />
    <Drawer @update-drawer="updateDrawer" :drawer="drawer" :items="drawerItems" :title="drawerTitle" />

    <h1>app layout</h1>
    <!-- <Nav /> -->
    <router-view></router-view>
  </v-main>
</template>

<script>
import AppBar from '@/components/AppBar'
import Drawer from '@/components/Drawer'
import drawerMixin from '@/mixins/drawer.js'
// import Nav from "@/components/Nav";

export default {
  name: "DashboardLayout",

  components: {
    AppBar,
    Drawer,
    // Nav,
  },

  mixins: [drawerMixin],

  data: () => ({
    drawerItems: [
      { title: "Profil", link: "/account", icon: "mdi-account" }, 
      { title: "Konu Aç", link: "/topic", icon: "mdi-lead-pencil" },
      { title: "Posts", link: "/posts", icon: "mdi-lead-pencil" },
    ],
    drawerTitle: 'Kullanıcı Adı',
  }),
};
</script>
