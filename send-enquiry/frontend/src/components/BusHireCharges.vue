<template>
  <v-card class="pa-10 rounded-xl elevation-2 text-center text-white mb-8 position-relative overflow-hidden custom-dark-card">
    <h2 class="text-h4 font-weight-black mb-3" style="position: relative; z-index: 2;">Bus Hire Charges for Outstation Trips</h2>
    <p class="text-subtitle-1 font-weight-medium mb-8 text-grey-lighten-2" style="position: relative; z-index: 2;">Bus rental cost depends on:</p>
    
    <div class="d-flex flex-wrap justify-center align-center" style="gap: 16px; position: relative; z-index: 2;">
      <div 
        v-for="(pill, index) in pills" 
        :key="index"
        class="bg-white text-grey-darken-4 rounded-pill px-6 py-2 font-weight-bold text-body-2 elevation-1"
      >
        {{ pill }}
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const pills = ref([
  'Distance(Per km rate)',
  'Number of travel days',
  'Type of bus (Volvo / AC / Mini Bus)',
  'Toll, parking & driver allowance'
])
</script>

<style scoped>
.custom-dark-card {
  background-color: #4B4D49; /* Dark grey-greenish color matching the image */
}
</style>
