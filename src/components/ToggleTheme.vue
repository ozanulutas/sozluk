<template>
  <v-btn
    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    icon
  >
    <v-icon>{{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'}}</v-icon>
  </v-btn>
</template>


<script>
export default {
  name: 'ToggleTheme',
}
</script>