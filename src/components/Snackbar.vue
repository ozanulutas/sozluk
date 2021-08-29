<template>
  <v-snackbar
    v-model="snackbar.show"
    :timeout="snackbar.timeout || 3000"
  >
    {{ snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        :color="snackbar.btn_color || 'blue'"
        text
        v-bind="attrs"
        @click="snackbar.show = false"
      >
        {{ snackbar.btn_text || 'Tamam' }}
      </v-btn>
      <v-btn
        v-if="snackbar.second_btn"
        :color="snackbar.second_btn.btn_color || 'blue'"
        text
        v-bind="attrs"
        @click="snackbar.second_btn.event"
      >
        {{ snackbar.second_btn.btn_text }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',

  props: {
    snackbar: {
      type: Object,
      required: true,
      default: () => ({
        show: false,
        text: '',
        timeout: 3000,
        btn_text: 'Tamam',
        btn_color: 'blue',
        second_btn: {
          btn_text: '',
          btn_color: 'blue',
          event: () => {}
        }
      })
    }
  }
}
</script>