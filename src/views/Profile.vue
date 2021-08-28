<template>
  <v-container>
    <h1>Profil</h1>
    <v-form ref="form" lazy-validation @submit.prevent="register">
      <v-text-field
        :value="formData.user_name"
        disabled
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
        GÜNCELLE      
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { rules } from '@/helpers/validation-rules.js'

export default {
  name: 'Profile',

  data: () => ({
    rules,
    formData: {
      user_name: 'Ozan',
      password: '1234',
      password_confirmation: '1234',
      email: 'oz@n.com',
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