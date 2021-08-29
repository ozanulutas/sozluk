<template>
  <v-menu left bottom>
    <template #activator="{ on, attrs }">
      <v-btn icon :attrs="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list dense nav>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'AuthMenu',

  computed: {
    items() {
      return this.$store.state.isLoggedIn ? [
        { link: '/account', text: 'Profil', icon: 'mdi-account' },
        { link: '', text: 'Çıkış', icon: 'mdi-logout-variant' },
      ] : [
        { link: '/login', text: 'Giriş', icon: 'mdi-login-variant' },
        { link: '/register', text: 'Üye Ol', icon: 'mdi-account-plus' },
      ]
    }
  }
};
</script>

<style>
</style>