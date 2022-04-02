<template>
  <div>
    <v-alert
        fixed
        type="error"
        v-model="showErrorMessage"
        transition="slide-x-transition"
        dismissible
        dense
    >
      An error happened: {{ errorMessage }}
    </v-alert>
    <div class="d-flex">
      <div
          class="top-filler"
      ></div>
      <v-system-bar
          color="grey darken-4 darken-4"
          class="d-flex justify-space-between text-header"
          window
      >
        <span class="white--text text-caption">{{ headerPath }}</span>
        <span class="white--text text-uppercase text-caption">https://cisotrust.fr</span>
        <span class="white--text text-caption">Signed in as Franck</span>
      </v-system-bar>
    </div>

    <v-navigation-drawer
        permanent
        left
        fixed
        expand-on-hover
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../../assets/logo.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-bold">BeSecure</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list
          nav
          dense
      >
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/' ? 'grey darken-4 darken-4' : 'blue-grey darken-3'">mdi-layers</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </router-link>
        <v-divider />
        <router-link to="/technologies">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/technologies' ? 'grey darken-4 darken-4' : 'blue-grey darken-3'">mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Website</v-list-item-title>
          </v-list-item>
        </router-link>
        <v-divider />
        <router-link to="/domains">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/test' ? 'grey darken-4 darken-4' : 'blue-grey darken-3'">mdi-shield-account-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Domains</v-list-item-title>
          </v-list-item>
        </router-link>
        <v-divider />
        <router-link
            :is="true ? 'span' : 'router-link'"
            to="/">
          <v-list-item link disabled>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/' ? 'grey darken-4 darken-4' : 'blue-grey darken-3'" disabled>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Privacy</v-list-item-title>
          </v-list-item>
        </router-link>
        <v-divider />
        <router-link to="/alerts">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/alerts' ? 'grey darken-4 darken-4' : 'blue-grey darken-3'">mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Alerts</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main class="flex">
      <div class="main-filler"></div>
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      errorMessage: '',
      showErrorMessage: false,
    }
  },
  computed: {
    headerPath() {
      if (this.$route.path === '/') return ''
      const string = this.$route.path.replace('/', '')
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  mounted() {
    this.$root.$on('error', this.showError)
    this.$store.dispatch('setAppsList')
  },
  methods: {
    showError(e) {
      this.errorMessage = e.message;
      this.showErrorMessage = true
      setTimeout(() => {
        this.showErrorMessage = false
      }, 5000)
    }
  }
};
</script>
