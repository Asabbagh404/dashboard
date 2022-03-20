import Vue from 'vue'
import Vuex from 'vuex'
import {odinAxiosInstance} from '../utils/axios-instance';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapIconThirdParty: {
      'cdn.cookielaw.org': 'grid',
      'try.abtasty.com': 'keyboard',
      'www.googletagmanager.com': 'database',
    },
    appsList: [],
    apps: {
      "third_parties": [
        {
          "id": 1,
          "url": "cdn.cookielaw.org"
        },
        {
          "id": 2,
          "url": "try.abtasty.com"
        },
        {
          "id": 3,
          "url": "www.googletagmanager.com"
        }
      ]
    }
  },
  mutations: {
    setAppsList (state, data) {
      state.appsList = data
    }
  },
  actions: {
    async setAppsList (context) {
      context.commit('setAppsList', await odinAxiosInstance.getAppsList());
    }
  },
  getters: {
    appListCount (state) {
      return state.appsList.length
    },
  },
  modules: {

  }
})
