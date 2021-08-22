<template>
  <v-main>
    <h1>app layout</h1>
    <Nav />
    <router-view></router-view>
  </v-main>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "AppLayout",

  components: {
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>
