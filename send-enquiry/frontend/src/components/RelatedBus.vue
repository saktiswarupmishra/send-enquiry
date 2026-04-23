<template>
  <div class="mb-12">
    <div class="text-center mb-8">
      <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Related Bus</h2>
      <p class="text-subtitle-1 text-grey-darken-1 mb-0">Similar Options You May Like</p>
    </div>

    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="i in 4" :key="i">
        <v-card class="rounded-xl elevation-2 overflow-hidden bg-white h-100 d-flex flex-column custom-border">
          <v-img src="/bus.jpg" height="160" cover></v-img>
          
          <v-card-text class="pa-4 flex-grow-1">
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
            
            <p class="text-caption text-grey-darken-1 mb-3" style="line-height: 1.4;">
              Luxury AC sleeper coach meant for comfortable night travels and intercity journeys with all essential amenities for a pleasant ride.
            </p>
            
            <p class="text-caption text-grey-darken-2 mb-1" style="font-size: 11px !important;">Local Price (Starting for 4hrs/40km): <span class="font-weight-bold text-green-darken-2">₹900</span></p>
            <p class="text-caption text-grey-darken-2 mb-0" style="font-size: 11px !important;">Outstation Price (Min 250km/Day): <span class="font-weight-bold text-green-darken-2">₹60</span> per km</p>
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
