<template>
  <div>
    <v-container class="justify-center login-container">
      <v-row><v-img src="../assets/logo.png" alt="logo" width="100px"/></v-row>
      <v-row><h1 class="text-center mx-auto">Connexion</h1></v-row>
      <v-row><v-text-field v-model="form.login" label="Login" type="text"></v-text-field></v-row>
      <v-row><v-text-field v-model="form.password" label="Password" type="password"></v-text-field></v-row>
      <v-row><v-btn @click="connect" color="primary" class="mx-auto my-5" width="130px" height="40px">Connect</v-btn></v-row>
      <v-row><span class="red--text">
        <v-icon
            v-if="error.length > 0"
          color="red darken-2"
      > mdi-alert</v-icon>{{ error }}</span></v-row>
    </v-container>
  </div>
</template>

<script>
import { odinAxiosInstance } from '../utils/axios-instance'

function hasBearerToken() {
  return localStorage.bearer && localStorage.bearer.length > 0
}

export default {
  data() {
    return {
      form: {
        login: '',
        password: ''
      },
      error: '',
    }
  },
  methods: {
    async connect() {
      const { login, password } = this.form
      try {
        await odinAxiosInstance.postLogin(login, password)
      } catch(e) {
        console.log(e)
          this.error = e
      }
    }
  },
  async mounted () {
    if (this.$store.state.isAdmin === true) {
      this.$router.push('/')
    }
    if (hasBearerToken()) {
      odinAxiosInstance.defaults.headers.Authorization = localStorage.bearer
      try {
        await odinAxiosInstance.getApp(1)
        await this.$store.dispatch('setAdmin', true)
        this.$router.push('/')
      } catch (e) {
        localStorage.bearer = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 200px;
}
</style>