<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="9" sm="12">
          <v-row>
            <v-col md="12">
              <v-card class="full-height">
                <v-card-title>CVE</v-card-title>
                <v-simple-table
                    fixed-header
                    height="300px"
                >
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th class="text-left">
                        Index
                      </th>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Priority
                      </th>
                      <th class="text-left">
                        Status
                      </th>
                      <th class="text-left">
                        Technology
                      </th>
                      <th class="text-left">
                        Last scanned
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="({cve, last_scanned, priority, status, technology}, index) in technology.cves"
                        :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ cve }}</td>
                      <td>{{ priority }}</td>
                      <td>{{ status }}</td>
                      <td>{{ technology }}</td>
                      <td>{{ last_scanned }}</td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="8">
              <v-card class="full-height">
                <v-card-title>Embedded Scripts</v-card-title>
                <v-card-text class="text-body-1 font-weight-bold justify-center"
                             v-for="({url}, index) in thirdParties" :key="index">{{ url }}
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-col md-6>
                <v-card>
                  <v-card-title class="text-body-1 font-weight-bold text-center justify-center">Header score
                  </v-card-title>
                  <v-card-text class="text-h5 text-center">{{ headerScore }}</v-card-text>
                </v-card>
              </v-col>
              <v-col md-6>
                <v-card>
                  <v-card-title class="text-body-1 font-weight-bold text-center justify-center">SSL/TLS score
                  </v-card-title>
                  <v-card-text class="text-h5 text-center">{{ sslAnalysisScore }}</v-card-text>
                </v-card>
              </v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="8">
              <v-card>
                <v-card-title>Application Behaviour</v-card-title>
                <v-card-text>
                  <v-col md="6" v-for="({url, isActive = false}, index) in $store.state.apps.third_parties"
                         :key="index">
                    <v-icon class="mr-2">mdi-{{ $store.state.mapIconThirdParty[url] }}</v-icon>
                    <span class="font-weight-bold"><span :class="{'teal--text': !isActive}">IS <template
                        v-if="!isActive">NOT</template></span> {{ url }}</span>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3" sm="12">
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Links</v-card-title>
                <div v-for="({link}, index) in technology.links" :key="index">
                  <v-card-text md="12" class="text-body-2 text-center mb-3">
                    <a :href="link">
                      {{ link }}
                    </a>
                  </v-card-text>
                  <hr class="mb-1">
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  props: {
    technology: {
      required: true,
      type: Object,
    },
  },
  computed: {
    sslAnalysisScore() {
      return this.technology.app?.ssl_analysis.notation || ''
    },
    headerScore() {
      return this.technology.app?.header_analysis.notation || ''
    },
    thirdParties() {
      return this.technology?.app?.third_parties || ''
    }
  }
}
</script>
