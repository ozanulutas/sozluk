<template>
  <v-menu left bottom>
    <template #activator="{ on, attrs }">
      <v-btn icon :attrs="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list dense nav>
      <v-list-item to="">
        <v-list-item-icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Giriş</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="">
        <v-list-item-icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Üye Ol</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
</style>