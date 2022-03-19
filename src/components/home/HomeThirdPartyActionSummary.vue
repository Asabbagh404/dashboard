<template>
  <v-card >
    <v-card-title>Third-Party Action Summary</v-card-title>
    <v-card-text>
      <div v-for="({icon, description}, index) in actions" :key="index" class="mt-2 py-2 d-flex flex-wrap justify-space-around align-center" :disabled="n % 2 == 0">
        <div class="content">
          <v-icon>mdi-{{icon}}</v-icon>
          <span class="ml-3">{{ description }}</span>
        </div>
        <div class="d-flex align-center justify-space-around"> <span class="mr-2">{{ index }}</span><v-progress-linear :value="Math.floor(Math.random() * 100)" class="progress-bar" height="10" rounded ></v-progress-linear></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {icon: 'earth', description: 'Creating Network Request'},
        {icon: 'grid', description: 'Changing Page structure'},
        {icon: 'crosshairs-gps', description: 'Requesting GPS location'},
        {icon: 'bell-plus', description: 'Communicating to Malicious Domain'},
        {icon: 'border-inside', description: 'Reading Personal Data'},
        {icon: 'keyboard', description: 'Accessing Sensitive Inputs'},
        {icon: 'grid', description: 'Conducting Cross-Site Tracking'},
        {icon: 'microphone', description: 'Accessing Camera/Microphone'},
        {icon: 'database', description: 'Using Insecure Certificates'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.progress-bar {
  width: 200px;
}
.content {
  min-width: 270px;
}
</style>
