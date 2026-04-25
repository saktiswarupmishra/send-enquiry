<template>
  <div class="h-100 d-flex flex-column" style="gap: 24px;">
    
    <!-- Map Card -->
    <v-card class="rounded-xl overflow-hidden bg-white mx-1" style="box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important; border: 1px solid #E1E3E6;">
      <div style="position: relative; height: 320px;">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&zoom=5" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <!-- Distance Time Stops Row -->
      <div class="d-flex pa-3 bg-white" style="gap: 12px;">
        <div class="flex-grow-1 text-white rounded-lg pa-2 text-center" style="background-color: #829D44;">
          <p class="text-caption font-weight-bold mb-0" style="font-size: 11px !important; letter-spacing: 0.5px;">DISTANCE</p>
          <p class="font-weight-bold mb-0 text-body-1" style="font-size: 17px !important;">200 km</p>
        </div>
        <div class="flex-grow-1 text-white rounded-lg pa-2 text-center" style="background-color: #829D44;">
          <p class="text-caption font-weight-bold mb-0" style="font-size: 11px !important; letter-spacing: 0.5px;">EST. TIME</p>
          <p class="font-weight-bold mb-0 text-body-1" style="font-size: 17px !important;">11h 20m</p>
        </div>
        <div class="flex-grow-1 text-white rounded-lg pa-2 text-center" style="background-color: #829D44;">
          <p class="text-caption font-weight-bold mb-0" style="font-size: 11px !important; letter-spacing: 0.5px;">STOPS</p>
          <p class="font-weight-bold mb-0 text-body-1" style="font-size: 17px !important;">2 Stops</p>
        </div>
      </div>
    </v-card>



    <!-- 4 Stats Cards Grid -->
    <div class="pa-2 mx-1 mt-1 rounded-xl" style="background-color: #E6E8EA;">
      <v-row dense>
        <v-col cols="6" v-for="(badge, index) in badges" :key="index" class="pa-1">
          <v-card class="pa-3 d-flex align-center elevation-0 bg-white" style="border-radius: 12px; min-height: 60px;">
            <v-avatar :color="badge.bg" size="32" class="mr-3">
               <v-icon :color="badge.color" size="16">{{ badge.icon }}</v-icon>
            </v-avatar>
            <div>
              <p class="font-weight-bold mb-0 text-grey-darken-4" style="font-size: 13px; line-height: 1.1;">{{ badge.value }}</p>
              <p class="text-uppercase font-weight-medium mb-0" style="font-size: 9px; letter-spacing: 0.5px; color: #78909C;">{{ badge.label }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Reviews -->
    <div class="d-flex align-center justify-space-between px-4 my-2">
       <div class="d-flex align-center">
         <v-avatar size="36" class="review-avatar"><v-img src="https://i.pravatar.cc/150?img=11"></v-img></v-avatar>
         <v-avatar size="36" class="review-avatar" style="margin-left: -12px;"><v-img src="https://i.pravatar.cc/150?img=12"></v-img></v-avatar>
         <v-avatar size="36" class="review-avatar" style="margin-left: -12px;"><v-img src="https://i.pravatar.cc/150?img=13"></v-img></v-avatar>
         <v-avatar size="36" color="#E65100" class="text-white review-avatar text-caption font-weight-bold" style="margin-left: -12px;">+1k</v-avatar>
       </div>
       <div class="text-right">
         <div class="d-flex align-center justify-end mb-1">
           <span class="font-weight-black mr-2 text-subtitle-1">4.8</span>
           <v-icon color="#E65100" size="16">mdi-star</v-icon>
           <v-icon color="#E65100" size="16">mdi-star</v-icon>
           <v-icon color="#E65100" size="16">mdi-star</v-icon>
           <v-icon color="#E65100" size="16">mdi-star</v-icon>
           <v-icon color="#E65100" size="16">mdi-star-half-full</v-icon>
         </div>
         <p class="text-caption text-grey font-weight-black mb-0" style="font-size: 9px !important; letter-spacing: 0.5px;">1,200+ GOOGLE REVIEWS</p>
       </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const badges = ref([
  { icon: 'mdi-emoticon-happy-outline', color: '#E65100', bg: '#FFF3E0', value: '5000+', label: 'HAPPY CUSTOMERS' },
  { icon: 'mdi-headphones', color: '#2E7D32', bg: '#E8F5E9', value: '24x7', label: 'GLOBAL SUPPORT' },
  { icon: 'mdi-tag-outline', color: '#424242', bg: '#F5F5F5', value: 'Best Price', label: 'GUARANTEED' },
  { icon: 'mdi-shield-check-outline', color: '#D32F2F', bg: '#FFEBEE', value: 'Verified', label: 'ELITE DRIVERS' },
])
</script>

<style scoped>
.stats-card {
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03) !important;
}
.review-avatar {
  border: 2px solid white;
}
</style>
