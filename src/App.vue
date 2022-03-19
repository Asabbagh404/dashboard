<template>
  <v-app>
    <div
        class="top-filler"
    ></div>
    <v-system-bar
        color="teal darken-4 darken-4"
        fixed
        class="d-flex justify-space-around text-caption"
    >
      <span class="white--text text-caption">Domains</span>
      <span class="white--text text-uppercase text-caption">https://cisotrust.fr</span>
      <span class="white--text text-caption">Signed in as Franck</span>
    </v-system-bar>
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
        <router-link to="/test">
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

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
.top-filler {
  width: 50px;
  height: 36px;
}

.main-filler {
  min-width: 56px;
  height: 100%;
  float: left;
}

.v-system-bar {
  left: 50px;
}
a {
  color: transparent !important;
}
</style>