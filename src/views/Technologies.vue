<template>
  <v-container fluid class="full-height">
    <v-row class="full-height">
      <v-col class="full-height">
        <v-card class="full-height">
          <v-tabs vertical color="dark" background-color="blue-grey lighten-5" active-class="white" class="full-height">
            <v-tab v-for="({id, name}, index) in technologies" :key="index" class="text-start full-height" :class="isWideScreen ? 'justify-start' : 'justify-center'" @click="onTechnologySelect(id)">
              <v-icon  v-if="isWideScreen" class="mr-2">mdi-earth</v-icon>
              <span>{{ name }}</span>
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <technologies-item-content
                  :technology="singleTechnology"
                />
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TechnologiesItemContent from '../components/technologies/TechnologiesItemContent';
import {odinAxiosInstance} from "../utils/axios-instance";

export default {
  components: {
    TechnologiesItemContent
  },
  async mounted() {
    this.technologies = this.$store.state.appsList;
    await this.onTechnologySelect(this.$store.state.appsList[0].id);
  },
  data() {
    return {
      singleTechnology: {},
      technologies: [],
    }
  },
  computed: {
    isWideScreen() {
      return ['md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
    },
  },
  methods: {
    async onTechnologySelect(id) {
      this.singleTechnology = {
        app: await odinAxiosInstance.getApp(id),
        links: await odinAxiosInstance.getAppLinks(id),
        cves: await odinAxiosInstance.getAppCsves(id)
      }
    }
  }
}
</script>