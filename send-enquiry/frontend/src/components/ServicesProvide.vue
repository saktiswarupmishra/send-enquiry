<template>
  <v-card class="pa-10 rounded-xl elevation-0 bg-white mb-8">
    <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Services We Provide</h2>
    <p class="text-subtitle-1 text-grey-darken-2 mb-8">Choose the right bus as per your group size:</p>
    
    <v-row>
      <v-col cols="12" md="6" v-for="(service, index) in services" :key="index" class="mb-4">
        <div class="d-flex align-start pe-md-8">
          <v-icon :icon="service.icon" color="#709C34" size="32" class="mr-4 mt-1 opacity-80"></v-icon>
          <div>
            <h3 class="text-h6 font-weight-bold text-grey-darken-4 mb-1" style="line-height: 1.2;">{{ service.title }}</h3>
            <p class="text-body-2 text-grey-darken-1 mb-0">{{ service.description }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'mdi-map-marker-distance',
    title: 'Local & Outstation',
    description: 'Seamless travel across cities or short local travels.'
  },
  {
    icon: 'mdi-airplane-takeoff',
    title: 'Airport Transfers',
    description: 'Punctual pickups and drop-offs for VIP delegations.'
  },
  {
    icon: 'mdi-heart-outline',
    title: 'Wedding Transport',
    description: 'Luxury fleet to complement your special day.'
  },
  {
    icon: 'mdi-briefcase-outline',
    title: 'Corporate Travel',
    description: 'Productivity-focused interiors for teams on the go.'
  },
  {
    icon: 'mdi-account-group-outline',
    title: 'Group Tours',
    description: 'Curated sightseeing with knowledgeable crew.'
  },
  {
    icon: 'mdi-bus-school',
    title: 'School Trips',
    description: 'Safety-first transportation for educational excursions.'
  }
])
</script>
