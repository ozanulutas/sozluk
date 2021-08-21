<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Kategori </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon :class="drawer ? '' : 'rotate-180'"> mdi-arrow-left </v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>sözlük</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,

    items: [
      { title: "Konu 1" },
      { title: "Konu 2" },
      { title: "Konu 3" },
    ],
    right: null,
  }),
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
