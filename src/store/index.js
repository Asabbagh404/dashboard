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
      "cves": [
        {
          "id": 1,
          "cve": "CVE-2020-11022",
          "priority": "MEDIUM",
          "status": "OPEN",
          "technology": "jQuery 1.10.2",
          "last_scanned": "2021-11-04"
        },
        {
          "id": 2,
          "cve": "CVE-2020-11023",
          "priority": "MEDIUM",
          "status": "OPEN",
          "technology": "jQuery 1.10.2",
          "last_scanned": "2021-11-04"
        },
        {
          "id": 3,
          "cve": "CVE-2016-7103",
          "priority": "MEDIUM",
          "status": "OPEN",
          "technology": "jQuery UI 1.10.3",
          "last_scanned": "2021-11-04"
        }
      ],
      "header_analysis": {
        "id": 1,
        "headers": "accept-ranges: bytes\n                cache-control: no-cache, no-store, must-revalidate\n                cf-cache-status: DYNAMIC\n                cf-ray: 6a91562d4ed9cdc7-CDG\n                content-encoding: gzip\n                content-security-policy: frame-ancestors 'self'\n                content-type: text/html;charset=UTF-8\n                date: Thu, 04 Nov 2021 22:39:08 GMT\n                expect-ct: max-age=604800, report-uri='https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct'\n                expires: Thu, 01 Dec 1994 16:00:00 GMT\n                pragma: no-cache\n                referrer-policy: strict-origin-when-cross-origin\n                server: cloudflare\n                vary: accept-encoding\n                x-content-type-options: nosniff\n                x-dw-request-base-id: I2bB2DOHg2EBAAB_\n                x-frame-options: SAMEORIGIN\n                x-xss-protection: 1",
        "notation": "B",
        "last_scanned": "2021-11-04"
      },
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
