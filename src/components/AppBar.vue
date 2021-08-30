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
    <v-responsive max-width="260" class="mr-2">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        clearable
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-responsive>
    
    <ToggleTheme />

    <!-- Auth -->
    <AuthMenu/>

  </v-app-bar>
</template>


<script>
import AuthMenu from '@/components/AuthMenu'
import ToggleTheme from '@/components/ToggleTheme'

export default {
  name: "AppBar",

  components: {
    AuthMenu,
    ToggleTheme,
  },

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