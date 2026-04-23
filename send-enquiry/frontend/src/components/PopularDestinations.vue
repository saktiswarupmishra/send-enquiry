<template>
  <div class="mb-12">
    <div class="d-flex justify-space-between align-end mb-6">
      <div>
        <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Bus Rental Popular Destination</h2>
        <p class="text-subtitle-1 text-grey-darken-1 mb-0">Top destinations frequently chosen for Bus rentals</p>
      </div>
      <v-btn variant="outlined" color="#6B8E23" class="px-6 rounded-pill bg-white font-weight-bold" height="40">
        Explore All Routes
      </v-btn>
    </div>

    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(dest, index) in destinations" :key="index">
        <v-card class="rounded-lg elevation-1 overflow-hidden bg-white h-100 d-flex flex-column border-thin">
          <div class="position-relative">
             <v-img :src="dest.image" height="190" cover></v-img>
             <v-chip v-if="dest.popular" color="#FBC02D" variant="flat" size="small" class="position-absolute font-weight-bold text-black px-3" style="top: 12px; left: 12px; border-radius: 12px;">
               Popular
             </v-chip>
          </div>
          <v-card-text class="pa-4 flex-grow-1 pb-2">
            <h3 class="text-subtitle-1 font-weight-bold text-grey-darken-3 mb-1">{{ dest.title }}</h3>
            <p class="text-caption text-grey-darken-1 mb-0 d-flex align-center font-weight-medium">
              <v-icon size="small" class="mr-1 text-grey-lighten-1">mdi-clock-outline</v-icon> {{ dest.duration }}
            </p>
          </v-card-text>
          
          <v-divider class="mx-4 mb-2 border-opacity-50" color="#709C34"></v-divider>

          <v-card-actions class="px-4 pb-4 pt-1 d-flex justify-space-between align-center">
            <div>
              <p class="text-caption text-grey-darken-1 mb-0 font-weight-bold" style="font-size: 10px !important; text-transform: uppercase;">STARTS FROM</p>
              <p class="font-weight-black text-h6 text-grey-darken-4 mb-0" style="line-height:1">{{ dest.price }}</p>
            </div>
            <v-btn color="#709C34" variant="flat" class="px-4 rounded-lg font-weight-bold text-white text-caption" height="32" style="text-transform: none;">
              View Buses
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const destinations = ref([
  {
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop',
    title: 'Delhi to Jaipur Bus Rental',
    duration: '5 Night 2 Days',
    price: '₹25,000',
    popular: true
  },
  {
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    title: 'Delhi to Agra Bus Rental',
    duration: '5 Night 2 Days',
    price: '₹25,000',
    popular: false
  },
  {
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop',
    title: 'Delhi to Chandigarh Bus Rental',
    duration: '5 Night 2 Days',
    price: '₹25,000',
    popular: false
  },
  {
    image: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Delhi to Manali Bus Rental',
    duration: '5 Night 2 Days',
    price: '₹25,000',
    popular: false
  }
])
</script>

<style scoped>
/* Any additional specific scoped styling if needed */
</style>
