<template>
  <div class="send-enquiry-bg pt-8 pb-16">
    <v-container>
      <!-- Header -->
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="text-h4 font-weight-black text-grey-darken-4 mb-2" style="font-family: 'Inter', sans-serif;">Send Enquiry</h1>
          <p class="text-subtitle-1 text-grey-darken-1 font-weight-medium">"Book Bus, Tempo Traveller & Car at Best Price in Delhi NCR"</p>
        </v-col>
      </v-row>

      <!-- Main Layout -->
      <v-row class="mb-4">
        <!-- Left: Form -->
        <v-col cols="12" md="6" lg="7">
          <EnquiryForm />
        </v-col>
        <!-- Right: Map & Info -->
        <v-col cols="12" md="6" lg="5">
          <SidebarInfo />
        </v-col>
      </v-row>

      <!-- Services Section -->
      <v-row class="mb-4">
        <v-col cols="12">
          <ServicesProvide />
        </v-col>
      </v-row>

      <!-- Bus Hire Charges Section -->
      <v-row class="mb-4">
        <v-col cols="12">
          <BusHireCharges />
        </v-col>
      </v-row>

      <!-- Why Choose ANT Travels Section -->
      <v-row class="mb-4">
        <v-col cols="12">
          <WhyChooseAnt />
        </v-col>
      </v-row>

      <!-- Contact Banner Section -->
      <v-row class="mb-4">
        <v-col cols="12" md="10" class="mx-auto">
          <ContactBanner />
        </v-col>
      </v-row>

      <!-- Popular Destinations Section -->
      <v-row class="mb-8">
        <v-col cols="12">
          <PopularDestinations />
        </v-col>
      </v-row>

      <!-- Traveler Stories Section -->
      <v-row class="mb-4">
        <v-col cols="12">
          <TravelerStories />
        </v-col>
      </v-row>

      <!-- Related Bus Section -->
      <v-row>
        <v-col cols="12">
          <RelatedBus />
        </v-col>
      </v-row>

    </v-container>
    
    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

<script setup>
import EnquiryForm from '../components/EnquiryForm.vue'
import SidebarInfo from '../components/SidebarInfo.vue'
import ServicesProvide from '../components/ServicesProvide.vue'
import BusHireCharges from '../components/BusHireCharges.vue'
import WhyChooseAnt from '../components/WhyChooseAnt.vue'
import ContactBanner from '../components/ContactBanner.vue'
import PopularDestinations from '../components/PopularDestinations.vue'
import TravelerStories from '../components/TravelerStories.vue'
import RelatedBus from '../components/RelatedBus.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.send-enquiry-bg {
  background-color: #EBECEE;
  min-height: 100vh;
}
.shadow-sm {
  box-shadow: 0 2px 8px rgba(0,0,0,0.05) !important;
}
</style>
