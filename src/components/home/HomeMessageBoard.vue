<template>
  <v-card class="full-height">
    <v-card-title class="d-flex justify-space-between">
      Message Board
      <div>
        <v-btn
            x-small
            text
            :color="showed === 'alerts' ? 'grey darken-4' : 'grey lighten-2' "
            @click="show('alerts')"
        >
          Show alerts
        </v-btn>
        <v-btn
            x-small
            text
            :color="showed === 'all' ? 'grey darken-4' : 'grey lighten-2' "
            @click="show('all')"
        >
          Show all
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text>
      <div v-if="cards.length === 0">
      <v-skeleton-loader v-for="(n, index) in 5" :key="index" type="card" height="100"
                         class="full-width d-block mt-5"></v-skeleton-loader>
      </div>
      <v-card v-for="({criticity, description, days}, index) in cards" :key="index" class="full-width d-block mt-5 item" :class="'item-' + criticity">
        <v-card-title><v-icon class="mr-2" color="grey darken-4">mdi-cog</v-icon> {{ criticity }} <span class="text-caption ml-3 dark darken-1">- {{ days }}</span></v-card-title>
        <v-card-text>{{ description }}</v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showed: 'alerts',
      cards: [
        {criticity: 'Medium', description: 'The website HTTP Strict Transport Security (HSTS) header', days: '1 day ago'},
        {criticity: 'Low', description: 'The website missing Content Security Polocy (CPS) header', days: '1 day ago'},
        {criticity: 'Medium', description: 'The website HTTP Strict Transport Security (HSTS) header', days: '1 day ago'},
      ],
    }
  },
  methods: {
    show(val) {
      this.cards = [];
      this.showed = val;
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  &-Low {
    border-left: 3px solid green
  }
  &-Medium {
    border-left: 3px solid #005200
  }

}
</style>