<template>
  <v-container>

    <v-form ref="form">
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

      <v-btn color="success" @click="login">
        GİRİŞ       
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { rules, resetForm, resetValidation } from '@/helpers/form.js'

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
        resetForm(this.$refs.form)
        resetValidation(this.$refs.form)
      }
    },
  }
}
</script>