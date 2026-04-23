<template>
  <v-card class="pa-10 rounded-xl elevation-0 why-choose-card mb-8">
    <v-row>
      <v-col cols="12" md="4" class="pe-md-8">
        <p class="text-caption font-weight-bold text-uppercase mb-2" style="color: #6A8D3F; letter-spacing: 1px;">&mdash; Elite Experience</p>
        <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-8" style="line-height: 1.3;">Why Choose ANT Travels ?</h2>
        
        <!-- Trusted Badge -->
        <div class="d-flex align-center bg-white rounded-xl pa-3 d-inline-flex elevation-1" style="border: 1px solid #f0f0f0;">
          <div class="d-flex mr-4">
             <v-avatar size="32" class="review-avatar"><v-img src="https://i.pravatar.cc/150?img=11" alt="Review 1"></v-img></v-avatar>
             <v-avatar size="32" class="review-avatar" style="margin-left: -10px;"><v-img src="https://i.pravatar.cc/150?img=12" alt="Review 2"></v-img></v-avatar>
             <v-avatar size="32" color="#709C34" class="text-white review-avatar text-caption font-weight-bold" style="margin-left: -10px; border-color: white !important;">10k+</v-avatar>
          </div>
          <div>
            <p class="font-weight-black text-body-2 mb-0 text-grey-darken-4">Trusted by 10,000+</p>
            <p class="text-caption text-grey-darken-1 mb-0" style="font-size: 11px !important;">Travelers across India</p>
          </div>
        </div>
      </v-col>
      
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" sm="6" v-for="(feature, index) in features" :key="index" class="mb-4">
            <div class="d-flex align-start pe-md-4">
              <v-icon :icon="feature.icon" color="#709C34" size="24" class="mr-3 opacity-80 mt-1"></v-icon>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-1" style="line-height: 1.2;">{{ feature.title }}</h3>
                <p class="text-caption text-grey-darken-1 mb-0" style="font-size: 13px !important; line-height: 1.4;">{{ feature.description }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    icon: 'mdi-bus-articulated-front',
    title: 'Elite Fleet',
    description: 'Volvo & Bharat Benz Luxury Coaches.'
  },
  {
    icon: 'mdi-account-tie-outline',
    title: 'Professional Chauffeurs',
    description: 'Trained, courteous & experienced'
  },
  {
    icon: 'mdi-clock-outline',
    title: 'On Time Pickup',
    description: 'NCR, Hotels, Airports & Stations'
  },
  {
    icon: 'mdi-seat-passenger',
    title: 'Supreme Comfort',
    description: 'Pushback seats with extra legroom'
  },
  {
    icon: 'mdi-hand-wash-outline',
    title: 'Hygiene Assured',
    description: 'Fully sanitized after every ride'
  },
  {
    icon: 'mdi-crown-outline',
    title: 'Best Value',
    description: 'Perfect for corporate & group travel'
  }
])
</script>

<style scoped>
.why-choose-card {
  background: linear-gradient(135deg, #f2f7ec 0%, #ffffff 30%);
}
.review-avatar {
  border: 2px solid white;
}
</style>
