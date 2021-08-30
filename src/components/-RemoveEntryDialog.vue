<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title>
        <v-icon>mdi-exclamation-thick</v-icon> 
        Dikkat
      </v-card-title>
      <v-card-text>
        Entry'yi Silmek İstediğinize Emin Misiniz?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          text
          @click="closeDialog"
        >
          İPTAL
        </v-btn>
        <v-btn 
          color="blue" 
          text
          @click="$emit('confirm')"
        >
          SİL
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: 'RemoveEntryDialog',

  props: {
    dialog: Boolean,
  },

  data: () => ({
  }),

  methods: {
    
    closeDialog() {
      this.$emit('update:dialog', false)
    }
  },

}
</script>
