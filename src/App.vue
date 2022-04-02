<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>

<script>
import DefaultLayout from "./views/layouts/DefaultLayout";
import NoLayout from "./views/layouts/NoLayout";

export default {
  components: {
    DefaultLayout,
    NoLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    }
  },
}
</script>
<style lang="scss">
body {
  overflow-y: hidden;
  padding-bottom: 20px;
  background: #f7f7f7 !important;
}
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
  text-decoration: none !important;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.v-alert {
  left: 50px;
}
.text-header {
  height: 72px!important;
}
</style>