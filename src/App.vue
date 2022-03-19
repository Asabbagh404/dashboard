<template>
  <v-app>
    <div class="d-flex">
      <div
          class="top-filler"
      ></div>
      <v-system-bar
          color="teal darken-4 darken-4"
          class="d-flex justify-space-between text-caption"
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
            <v-img src="./assets/logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
          nav
          dense
      >
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/' ? 'teal darken-4 darken-4' : 'black'">mdi-layers</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Website</v-list-item-title>
          </v-list-item>
        </router-link>
        <hr>
        <router-link to="/technologies">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/technologies' ? 'teal darken-4 darken-4' : 'black'">mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inventory</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/domains">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/test' ? 'teal darken-4 darken-4' : 'black'">mdi-shield-account-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Domains</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/">
          <v-list-item link disabled>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/' ? 'teal darken-4 darken-4' : 'black'" disabled>mdi-earth</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Privacy</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/alerts">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon :color="$route.path === '/alerts' ? 'teal darken-4 darken-4' : 'black'">mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Alerts</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main class="flex">
      <div class="main-filler"></div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    headerPath() {
      if (this.$route.path === '/') return ''
      const string = this.$route.path.replace('/', '')
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.theme--light.v-application {
  background: #f7f7f7 !important;
}
.v-system-bar {
  left: 56px !important;
  width: calc(100vw - 75px) !important;
}

.full-height {
  height: 100%;
}
.mid-height {
  height: 50%;
}
.full-width {
  width: 100%;
}
.top-filler {
  width: 55px;
  height: 36px;
}

.main-filler {
  min-width: 56px;
  height: 100%;
  float: left;
}
a {
  color: transparent !important;
}
</style>