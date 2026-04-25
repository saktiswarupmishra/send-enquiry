<template>
  <div class="mb-12">
    <div class="text-center mb-8">
      <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Related Bus</h2>
      <p class="text-subtitle-1 text-grey-darken-1 mb-0">Similar Options You May Like</p>
    </div>

    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="i in 4" :key="i">
        <v-card class="rounded-xl elevation-2 overflow-hidden bg-white h-100 d-flex flex-column custom-border">
          <v-img src="/bus.jpg" height="160" cover class="position-relative">
            <v-chip
              color="error"
              size="small"
              class="position-absolute top-0 right-0 ma-2 font-weight-bold elevation-1"
            >
              25% OFF
            </v-chip>
          </v-img>
          
          <v-card-text class="pa-4 flex-grow-1 d-flex flex-column">
            <h3 class="text-subtitle-2 font-weight-bold text-grey-darken-4 mb-2" style="font-size: 15px !important;">21 Sleeper (2+1) AC Deluxe Coach</h3>
            
            <div class="d-flex flex-wrap mb-3" style="gap: 4px;">
              <v-chip size="x-small" variant="outlined" color="grey-darken-1" class="font-weight-medium bg-grey-lighten-4">
                <v-icon left size="x-small" class="mr-1">mdi-snowflake</v-icon> AC
              </v-chip>
              <v-chip size="x-small" variant="outlined" color="grey-darken-1" class="font-weight-medium bg-grey-lighten-4">
                <v-icon left size="x-small" class="mr-1">mdi-wifi</v-icon> Wi-Fi
              </v-chip>
              <v-chip size="x-small" variant="outlined" color="grey-darken-1" class="font-weight-medium bg-grey-lighten-4">
                <v-icon left size="x-small" class="mr-1">mdi-bottle-wine-outline</v-icon> Water Bottle
              </v-chip>
            </div>
            
            <p class="text-caption text-grey-darken-1 mb-3 flex-grow-1" style="line-height: 1.4;">
              Luxury AC sleeper coach meant for comfortable night travels and intercity journeys with all essential amenities for a pleasant ride.
            </p>
            
            <div class="pricing-container bg-green-lighten-5 rounded pa-2 mt-auto border" style="border-color: rgba(112, 156, 52, 0.3) !important;">
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="text-caption text-grey-darken-3 font-weight-medium" style="font-size: 11px !important;">Local (4hrs/40km)</span>
                <div class="d-flex align-center">
                  <span class="text-decoration-line-through text-grey mr-1" style="font-size: 11px;">₹1200</span>
                  <span class="font-weight-bold text-green-darken-3" style="font-size: 14px;">₹900</span>
                </div>
              </div>
              <v-divider class="my-1 border-opacity-50" color="success"></v-divider>
              <div class="d-flex justify-space-between align-center">
                <span class="text-caption text-grey-darken-3 font-weight-medium" style="font-size: 11px !important;">Outstation (Per km)</span>
                <div class="d-flex align-center">
                  <span class="text-decoration-line-through text-grey mr-1" style="font-size: 11px;">₹80</span>
                  <span class="font-weight-bold text-green-darken-3" style="font-size: 14px;">₹60</span>
                </div>
              </div>
            </div>
          </v-card-text>
          
          <v-divider></v-divider>
          
          <v-card-actions class="pa-3 px-4 d-flex justify-space-between bg-grey-lighten-5">
            <v-btn variant="outlined" color="#709C34" class="px-4 rounded-lg font-weight-bold bg-white text-caption" height="32" style="text-transform: none;">
              View Buses
            </v-btn>
            <v-btn color="#709C34" variant="flat" class="px-4 rounded-lg font-weight-bold text-white text-caption" height="32" style="text-transform: none;">
              Book Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-border {
  border: 1px solid #e0e0e0;
}
</style>
