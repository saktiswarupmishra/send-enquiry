<template>
  <v-app-bar app elevation="1" color="white" class="px-md-4 NavBar">
    <v-container class="d-flex align-center w-100 max-width-1200 pa-0">
      <!-- Branding / Logo -->
      <router-link to="/" class="text-decoration-none d-flex align-center mr-8">
        <v-icon color="primary" size="x-large" class="mr-2">mdi-bus-double-decker</v-icon>
        <span class="text-h6 font-weight-black logo-text" style="color: #212529;">ANT <span class="text-primary">TRAVELS</span></span>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation Links -->
      <div class="d-none d-lg-flex align-center navigation-links">
        <v-btn variant="text" to="/" class="nav-btn">Home</v-btn>
        <v-btn variant="text" href="https://www.ebookmyseat.in/" target="_blank" class="nav-btn text-grey-darken-3">Bus Ticket</v-btn>

        <!-- Bus Hire Dropdown -->
        <v-menu open-on-hover transition="slide-y-transition" :close-delay="100">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="nav-btn" append-icon="mdi-chevron-down">Bus Hire</v-btn>
          </template>
          <v-list class="dropdown-list py-2" bg-color="white" elevation="4">
            <v-list-item v-for="(item, index) in busHireOptions" :key="index" link class="dropdown-item px-4 py-2">
              <v-list-item-title class="dropdown-title">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Car Hire Dropdown -->
        <v-menu open-on-hover transition="slide-y-transition" :close-delay="100">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="nav-btn" append-icon="mdi-chevron-down">Car Hire</v-btn>
          </template>
          <v-list class="dropdown-list py-2" bg-color="white" elevation="4">
            <v-list-item v-for="(item, index) in carHireOptions" :key="index" link class="dropdown-item px-4 py-2">
              <v-list-item-title class="dropdown-title">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Traveller Hire Dropdown -->
        <v-menu open-on-hover transition="slide-y-transition" :close-delay="100">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="nav-btn" append-icon="mdi-chevron-down">Traveller Hire</v-btn>
          </template>
          <v-list class="dropdown-list py-2" bg-color="white" elevation="4">
            <v-list-item v-for="(item, index) in travellerHireOptions" :key="index" link class="dropdown-item px-4 py-2">
              <v-list-item-title class="dropdown-title">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn variant="text" to="/gallery" class="nav-btn">Gallery</v-btn>
        <v-btn variant="text" to="/payment" class="nav-btn">Online Payment</v-btn>
        <v-btn variant="flat" color="primary" to="/contact" class="nav-btn ml-2 px-6 rounded-pill text-white fw-bold">Contact Us</v-btn>
      </div>

      <!-- Mobile Menu Toggle -->
      <v-btn icon class="d-lg-none" @click="drawer = !drawer">
        <v-icon color="grey-darken-3">mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <div class="pa-4 pt-6 d-flex justify-space-between align-center border-b">
        <router-link to="/" class="text-decoration-none d-flex align-center">
            <v-icon color="primary" size="large" class="mr-2">mdi-bus-double-decker</v-icon>
            <span class="text-subtitle-1 font-weight-black" style="color: #212529;">ANT <span class="text-primary">TRAVELS</span></span>
        </router-link>
        <v-btn icon size="small" variant="text" @click="drawer = false">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
    <v-list nav class="mt-2">
      <v-list-item to="/" prepend-icon="mdi-home-outline" title="Home" class="mb-1"></v-list-item>
      <v-list-item href="https://www.ebookmyseat.in/" target="_blank" prepend-icon="mdi-ticket-outline" title="Bus Ticket" class="mb-1"></v-list-item>

      <v-list-group value="Bus Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-bus" title="Bus Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in busHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-group value="Car Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-car-outline" title="Car Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in carHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-group value="Traveller Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-van-passenger" title="Traveller Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in travellerHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-item to="/gallery" prepend-icon="mdi-image-multiple-outline" title="Gallery" class="mb-1"></v-list-item>
      <v-list-item to="/payment" prepend-icon="mdi-credit-card-outline" title="Online Payment" class="mb-1"></v-list-item>
      <v-list-item to="/contact" prepend-icon="mdi-phone-outline" title="Contact Us" class="mb-1"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const busHireOptions = [
  'Bus Hire for Outstation',
  'Delhi To Agra',
  'Delhi To Ayodhya',
  'Delhi to Haridwar Rishikesh',
  'Delhi to Jaipur',
  'Delhi to Jim Corbett',
  'Delhi Sightseeing'
]

const carHireOptions = [
  'Car Hire for Outstation',
  'Delhi Sightseeing Tour',
  'Delhi to Agra Taj Mahal Tour',
  'Delhi to Haridwar Rishikesh Tour',
  'Delhi to Jaipur Tour',
  'Delhi to Jim Corbett Nainital Tour'
]

const travellerHireOptions = [
  'Traveller Hire for Outstation',
  'Delhi to Agra',
  'Delhi to Haridwar Rishikesh',
  'Delhi to Jaipur',
  'Delhi To Jim Corbett',
  'Delhi Sightseeing'
]
</script>

<style scoped>
.NavBar {
  font-family: 'Inter', sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}

.max-width-1200 {
  max-width: 1200px;
  margin: 0 auto;
}

.logo-text {
  letter-spacing: 0.5px;
}

.navigation-links {
  gap: 6px;
}

.nav-btn {
  text-transform: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0;
  color: #333333;
  transition: all 0.2s ease-in-out;
}

.nav-btn:hover:not(.v-btn--variant-flat) {
  color: var(--v-primary-base, #1976D2) !important;
  background-color: transparent !important;
}

.dropdown-list {
  border-radius: 12px;
  min-width: 250px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
}

.dropdown-item {
  transition: all 0.2s ease;
  border-radius: 6px;
  margin: 0 8px;
}

.dropdown-item:hover {
  background-color: rgba(25, 118, 210, 0.06);
  color: var(--v-primary-base, #1976D2);
}

.dropdown-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  white-space: normal;
  line-height: 1.4;
}

:deep(.v-list-item--active) {
    background-color: rgba(25, 118, 210, 0.08) !important;
    color: var(--v-primary-base, #1976D2) !important;
}
</style>
