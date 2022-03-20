<template>
  <v-container fluid class="full-height">
    <v-row class="full-height">
      <v-col class="full-height">
        <v-card class="full-height">
          <v-tabs vertical color="dark" background-color="blue-grey lighten-5" active-class="white" class="full-height">
            <v-tab v-for="({image, name}, index) in technologies" :key="index" class="text-start full-height" :class="isWideScreen ? 'justify-start' : 'justify-center'">
              <v-img :src="require('@/assets/' + image)" class="mr-3" max-height="20" max-width="20"/>
              <span v-if="isWideScreen">{{ name }}</span>
            </v-tab>
            <v-tab-item v-for="(technology, index) in technologies" :key="index">
              <v-card flat>
                <technologies-item-content
                  :technology="technology"
                />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                  </p>

                  <p>
                    Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                  </p>

                  <p>
                    Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                  </p>

                  <p>
                    Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                  </p>

                  <p class="mb-0">
                    Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                  </p>

                  <p class="mb-0">
                    Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                  </p>
                </v-card-text>
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

export default {
  components: {
    TechnologiesItemContent
  },
  computed: {
    isWideScreen() {
      return ['md', 'lg', 'xl'].includes(this.$vuetify.breakpoint.name)
    }
  },
  data() {
    return {
      technologies: [
        {name: 'Embedded Script', image:'jquery.png', firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
        {name: 'Font by Font Awesome', image:'jquery.png',firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
        {name: 'Jquery', image:'jquery.png', firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
        {name: 'Lightbox', image:'jquery.png', firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
        {name: 'Waypoints', image:'jquery.png', firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
        {name: 'Wordpress', image:'jquery.png', firstSeen: '2/9/2022', siteDisplayRate: '100%', globalPopularity: '100%'},
      ]
    }
  }
}
</script>