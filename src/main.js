import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    emitError: function (error) {
      this.$root.$emit('error', error);
    },
  },
})

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
