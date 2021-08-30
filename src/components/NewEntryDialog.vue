<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title>
        <v-icon>mdi-plus</v-icon> 
        Yeni Entry
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          lazy-validation
        >
          <v-textarea 
            :rules="[rules.required()]"
            :value="editData.post"
            label="Entry" 
            clearable
          >
          </v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          text
          @click="closeDialog"
        >
          KAPAT
        </v-btn>
        <v-btn 
          color="blue" 
          text
          @click="entry"
        >
          KAYDET
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import { rules } from '@/helpers/validation-rules'


export default {
  name: 'NewEntryDialog',

  props: {
    dialog: Boolean,
    editData: Object,
  },

  data: () => ({
    rules,
  }),

  methods: {
    entry() {
      if(this.$refs.form.validate()) {
        this.closeDialog()
        
        console.log("entry girildi");
      }
    },
    closeDialog() {
      this.$refs.form.reset()
      this.$refs.form.resetValidation()
      this.$emit('update:edit-data', {})
      this.$emit('update:dialog', false)
    }
  },

}
</script>
