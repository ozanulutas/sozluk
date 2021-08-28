<template>
  <v-container>

    <v-form ref="form" @submit.prevent="login">
      <v-text-field
        v-model="formData.user_name"
        :rules="[rules.required()]"
        prepend-icon="mdi-account"
        label="Kullanıcı Adı"
      >
      </v-text-field>

      <v-text-field
        v-model="formData.password"
        :rules="[rules.required()]"
        :type="isPasswordShown ? 'text' : 'password'"
        prepend-icon="mdi-key"
        :append-icon="isPasswordShown ? 'mdi-eye' : 'mdi-eye-off'"
        label="Şifre"
        @click:append="isPasswordShown = !isPasswordShown"
      >
      </v-text-field>

      <v-btn type="submit" color="success">
        GİRİŞ       
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { rules } from '@/helpers/validation-rules.js'

export default {
  name: 'Login',

  data: () => ({
    rules,
    formData: {
      user_name: '',
      password: '',
    },
    isPasswordShown: false,
  }),
  methods: {
    login() {
      if(this.$refs.form.validate()) {
        console.log("logged in");
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
      }
    },
  }
}
</script>