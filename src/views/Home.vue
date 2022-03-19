<template>
  <v-container class="full-height">
    <v-row class="full-height">
      <v-col lg="4" sm="12">
        <home-message-board />
      </v-col>
      <v-col lg="8" sm="12" class="full-height">
          <v-row class="mid-height">
            <v-col lg="6" sm="12">
              <home-active-monitored-technologies class="mt-3 full-height" />
            </v-col>
            <v-col lg="6" sm="12">
              <home-third-party-action-summary class="mt-3 full-height" />
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeMessageBoard from '../components/home/HomeMessageBoard';
import HomeActiveMonitoredTechnologies from '../components/home/HomeActiveMonitoredTechnologies';
import HomeThirdPartyActionSummary from '../components/home/HomeThirdPartyActionSummary';

export default {
  name: 'Home',
  components: {
    HomeMessageBoard,
    HomeActiveMonitoredTechnologies,
    HomeThirdPartyActionSummary
  }
}
</script>

<style></style>
