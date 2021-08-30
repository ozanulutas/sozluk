<template>
  <v-container>
    <h1>Konu Aç</h1>
    <v-form ref="form" lazy-validation @submit.prevent="send">
      <v-text-field
        v-model="formData.topic"
        :rules="[rules.required()]"
        label="Başlık"
      >
      </v-text-field>

      <v-textarea
        v-model="formData.post"
        label="Entry"
        clearable
      >
      </v-textarea>

      <v-btn type="submit" color="success">
        GÖNDER    
      </v-btn>
    </v-form>

    <Snackbar :snackbar="snackbar"/>

  </v-container>
</template>

<script>
import Snackbar from '@/components/Snackbar.vue'
import { rules } from '@/helpers/validation-rules.js'

export default {
  name: 'Topic',
  components: {
    Snackbar,
  },

  data: () => ({
    rules,
    formData: {
      title: '',
      post: '',
    },
    snackbar: {
      show: false,
      text: '',
    },
  }),
  methods: {
    send() {
      if(this.$refs.form.validate()) {
        console.log("sent");
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
        this.snackbar = {
          show: true,
          text: 'Konu oluşturuldu.'
        }
      }
    },
  }
}
</script>