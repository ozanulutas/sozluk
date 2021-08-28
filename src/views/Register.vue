<template>
  <v-container>

    <v-form ref="form" lazy-validation @submit.prevent="register">
      <v-text-field
        v-model="formData.user_name"
        :rules="[rules.required()]"
        prepend-icon="mdi-account"
        label="Kullanıcı Adı"
      >
      </v-text-field>

      <v-text-field
        v-model="formData.email"
        :rules="[rules.email()]"
        prepend-icon="mdi-email"
        label="Email"
      >
      </v-text-field>

      <v-text-field
        v-model="formData.password"
        :rules="[rules.required(), rules.minLen(3)]"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-key"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="Şifre"
        @click:append="showPassword = !showPassword"
      >
      </v-text-field>

      <v-text-field
        v-model="formData.password_confirmation"
        :rules="[rules.required(), rules.match(formData.password, 'Şifreler uyuşmuyor.')]"
        :type="showPasswordConfirmation ? 'text' : 'password'"
        prepend-icon="mdi-key-outline"
        :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
        label="Tekrar Şifre"
        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
      >
      </v-text-field>

      <v-btn type="submit" color="success">
        ÜYE OL       
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { rules } from '@/helpers/validation-rules.js'

export default {
  name: 'Register',

  data: () => ({
    rules,
    formData: {
      user_name: '',
      password: '',
      password_confirmation: '',
      email: '',
    },
    showPassword: false,
    showPasswordConfirmation: false,
  }),
  methods: {
    register() {
      if(this.$refs.form.validate()) {
        console.log("registered");
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
      }
    },


  }
}
</script>