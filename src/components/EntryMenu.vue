<template>
  <v-menu bottom left>
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        :attrs="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list dense nav>
      <v-list-item @click="$emit('edit')">
        <v-list-item-icon>
          <v-icon>mdi-pencil-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Düzenle
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="$emit('remove')">
        <v-list-item-icon>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Sil
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
  </v-menu>
</template>

<script>
export default {
  name: 'EntryMenu',

  methods: {
  }
}
</script>

<style>

</style>