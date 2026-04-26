<template>
  <v-app-bar app elevation="1" color="white" class="px-md-4 NavBar">
    <v-container class="d-flex align-center w-100 max-width-1200 pa-0">
      <!-- Branding / Logo -->
      <router-link to="/" class="text-decoration-none d-flex align-center mr-8">
        <div class="ant-logo">
          <div class="ant-logo-text">ANT</div>
          <div class="ant-logo-subtitle">
            <div class="logo-lines-group">
              <span class="logo-line-thin"></span>
              <span class="logo-line-thin"></span>
              <span class="logo-line-thin"></span>
            </div>
            <span class="logo-tourist">TOURIST</span>
            <div class="logo-lines-group">
              <span class="logo-line-thin"></span>
              <span class="logo-line-thin"></span>
              <span class="logo-line-thin"></span>
            </div>
          </div>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation Links -->
      <div class="d-none d-lg-flex align-center navigation-links">
        <v-btn icon to="/" title="Home" class="nav-btn mr-2" variant="text">
          <v-icon size="28" color="primary" class="moving-bus-icon">mdi-bus-side</v-icon>
        </v-btn>

        <!-- Bus Hire Dropdown -->
        <v-menu open-on-hover transition="slide-y-transition" :close-delay="100">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="nav-btn" prepend-icon="mdi-bus" append-icon="mdi-chevron-down">Bus Hire</v-btn>
          </template>
          <v-list class="dropdown-list py-2" bg-color="white" elevation="4">
            <v-list-item v-for="(item, index) in busHireOptions" :key="index" link class="dropdown-item px-4 py-2">
              <v-list-item-title class="dropdown-title">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn variant="text" href="https://www.ebookmyseat.in/" target="_blank" class="nav-btn text-grey-darken-3" prepend-icon="mdi-ticket-outline">Bus Ticket</v-btn>

        <!-- Car Hire Dropdown -->
        <v-menu open-on-hover transition="slide-y-transition" :close-delay="100">
          <template v-slot:activator="{ props }">
            <v-btn variant="text" v-bind="props" class="nav-btn" prepend-icon="mdi-car-outline" append-icon="mdi-chevron-down">Car Hire</v-btn>
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
            <v-btn variant="text" v-bind="props" class="nav-btn" prepend-icon="mdi-van-passenger" append-icon="mdi-chevron-down">Minivan Hire</v-btn>
          </template>
          <v-list class="dropdown-list py-2" bg-color="white" elevation="4">
            <v-list-item v-for="(item, index) in travellerHireOptions" :key="index" link class="dropdown-item px-4 py-2">
              <v-list-item-title class="dropdown-title">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn variant="text" to="/payment" class="nav-btn" prepend-icon="mdi-headset">Help Support</v-btn>
        <v-btn variant="text" to="/send-enquiry" :active="false" class="nav-btn" prepend-icon="mdi-calendar-check-outline">Manage Booking</v-btn>
        <v-btn variant="flat" color="primary" to="/contact" class="nav-btn ml-2 px-6 rounded-pill text-white fw-bold" prepend-icon="mdi-bookmark-check">Book Now</v-btn>
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
          <div class="ant-logo" style="transform: scale(0.85); transform-origin: left center;">
            <div class="ant-logo-text">ANT</div>
            <div class="ant-logo-subtitle">
              <div class="logo-lines-group">
                <span class="logo-line-thin"></span>
                <span class="logo-line-thin"></span>
                <span class="logo-line-thin"></span>
              </div>
              <span class="logo-tourist">TOURIST</span>
              <div class="logo-lines-group">
                <span class="logo-line-thin"></span>
                <span class="logo-line-thin"></span>
                <span class="logo-line-thin"></span>
              </div>
            </div>
          </div>
        </router-link>
        <v-btn icon size="small" variant="text" @click="drawer = false">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </div>
    <v-list nav class="mt-2">
      <v-list-item to="/" class="mb-1">
        <template v-slot:prepend>
          <v-icon class="moving-bus-icon mr-5" color="primary">mdi-bus-side</v-icon>
        </template>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group value="Bus Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-bus" title="Bus Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in busHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-item href="https://www.ebookmyseat.in/" target="_blank" prepend-icon="mdi-ticket-outline" title="Bus Ticket" class="mb-1"></v-list-item>

      <v-list-group value="Car Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-car-outline" title="Car Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in carHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-group value="Traveller Hire">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-van-passenger" title="Minivan Hire" class="mb-1"></v-list-item>
        </template>
        <v-list-item v-for="(item, i) in travellerHireOptions" :key="i" :title="item" class="pl-12"></v-list-item>
      </v-list-group>

      <v-list-item to="/payment" prepend-icon="mdi-headset" title="Help Support" class="mb-1"></v-list-item>
      <v-list-item to="/send-enquiry" :active="false" prepend-icon="mdi-calendar-check-outline" title="Manage Booking" class="mb-1"></v-list-item>
      <v-list-item to="/contact" prepend-icon="mdi-bookmark-check" title="Book Now" class="mb-1"></v-list-item>
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

/* ANT Logo */
.ant-logo {
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  padding: 4px 6px;
}
.ant-logo-text {
  font-size: 38px;
  font-weight: 900;
  line-height: 0.8;
  color: #2B2B2B;
  text-align: center;
  font-family: 'Arial Black', Impact, sans-serif;
  text-transform: uppercase;
  transform: scaleX(1.15);
  margin-bottom: 2px;
}
.ant-logo-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 3px;
  padding: 0 4px;
}
.logo-lines-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 20px;
}
.logo-line-thin {
  width: 100%;
  height: 1px;
  background-color: #2B2B2B;
}
.logo-tourist {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #2B2B2B;
  white-space: nowrap;
}

/* Animated Bus Icon */
.moving-bus-icon {
  animation: bus-bounce 2.5s infinite;
  transform-origin: bottom center;
}

@keyframes bus-bounce {
  0% { transform: translateY(0); }
  10% { transform: translateY(-5px); }
  20% { transform: translateY(0); }
  30% { transform: translateY(-3px); }
  40% { transform: translateY(0); }
  100% { transform: translateY(0); }
}
</style>
