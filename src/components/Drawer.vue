<template>
  <v-navigation-drawer 
    v-model="mutableDrawer" 
    @input="updateDrawer"
    mobile-breakpoint="sm"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">{{ title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item 
        v-for="item in items" :key="item.title" 
        :to="item.link"
      >
        <v-list-item-icon v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  name: "Drawer",

  props: {
    drawer: Boolean,
    items: Array, 
    title: String,
  },

  data: () => ({
    // items: [{ title: "Konu 1", link: "/topic" }, { title: "Konu 2", link: "s" }, { title: "Konu 3", link: "d" }],
  }),

  computed: {
    mutableDrawer: {
      get() { return this.drawer },
      set() {}
    }
  },

  methods: {
    updateDrawer(e) {
      this.$emit('update-drawer', e)
    }
  }
  
};
</script>


<style>
</style>