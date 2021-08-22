<template>
  <v-app-bar app>

    <!-- Toggle Drawer -->
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')">
      <v-icon :class="drawer ? '' : 'rotate-180'"> mdi-arrow-left </v-icon>
    </v-app-bar-nav-icon>

    <!-- Title -->
    <v-toolbar-title>
      <v-icon> mdi-skull-crossbones </v-icon>
      <b>xxx</b>sözlük
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Search -->
    <v-responsive max-width="260">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
      ></v-text-field>
    </v-responsive>

  </v-app-bar>
</template>


<script>
export default {
  name: "AppBar",

  props: {
    drawer: Boolean
  },
};
</script>


<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>