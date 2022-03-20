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
            <v-tab-item v-for="(technology, index) in technologies" :key="index">
              <v-card flat>
                <technologies-item-content
                  :technology="technology"
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
  data() {
    return {
      singleTechnology: null,
    }
  },
  computed: {
    isWideScreen() {
      return ['md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
    },
    technologies() {
      return this.$store.state.appsList;
    }
  },
  methods: {
    async onTechnologySelect(id) {
     const data = await odinAxiosInstance.getApp(id)
      this.singleTechnology = data;
    }
  }
}
</script>