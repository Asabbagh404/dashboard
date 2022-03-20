<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="full-height">
            <v-card-title>Embedded Scripts</v-card-title>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Application Behaviour</v-card-title>
            <v-card-text>
              <v-row>
                <v-col md="6" sm="12" v-for="({url, isActive = false}, index) in $store.state.apps.third_parties" :key="index">
                  <v-icon class="mr-2">mdi-{{ $store.state.mapIconThirdParty[url] }}</v-icon>
                  <span class="font-weight-bold"><span :class="{'teal--text': !isActive}">IS <template
                      v-if="!isActive">NOT</template></span> {{ url }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="text-body-1 font-weight-bold text-center justify-center">First Seen</v-card-title>
            <v-card-text class="text-h5 text-center">{{ technology.firstSeen }}</v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="text-body-1 font-weight-bold text-center justify-center">Site Display Rate
            </v-card-title>
            <v-card-text class="text-h5 text-center">{{ technology.siteDisplayRate }}</v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="text-body-1 font-weight-bold text-center justify-center">Global Popularity
            </v-card-title>
            <v-card-text class="text-h5 text-center">{{ technology.globalPopularity }}</v-card-text>
          </v-card>
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
    }
  },
  // data() {
  //   return {
  //     actions: [
  //       {icon: 'earth', description: 'Creating Network Request', isActive: true},
  //       {icon: 'grid', description: 'Changing Page structure', isActive: false},
  //       {icon: 'crosshairs-gps', description: 'Requesting GPS location', isActive: false},
  //       {icon: 'bell-plus', description: 'Communicating to Malicious Domain', isActive: false},
  //       {icon: 'border-inside', description: 'Reading Personal Data', isActive: false},
  //       {icon: 'keyboard', description: 'Accessing Sensitive Inputs', isActive: false},
  //       {icon: 'grid', description: 'Conducting Cross-Site Tracking', isActive: false},
  //       {icon: 'microphone', description: 'Accessing Camera/Microphone', isActive: false},
  //       {icon: 'database', description: 'Using Insecure Certificates', isActive: false},
  //     ]
  //   }
  // }
}
</script>