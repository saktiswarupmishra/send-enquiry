<template>
  <div class="mb-12">
    <div class="text-center mb-8">
      <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Related Bus</h2>
      <p class="text-subtitle-1 text-grey-darken-1 mb-0">Similar Options You May Like</p>
    </div>

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3" v-for="(bus, i) in buses" :key="i">
        <v-card class="rounded-xl elevation-2 overflow-hidden bg-white h-100 d-flex flex-column custom-border hover-card">
          <v-img src="/bus.jpg" height="160" cover class="position-relative">
          </v-img>
          
          <v-card-text class="pa-4 flex-grow-1 d-flex flex-column">
            <h3 class="text-subtitle-2 font-weight-bold text-grey-darken-4 mb-2 text-wrap" style="font-size: 13px !important; line-height: 1.2; min-height: 32px;" :title="bus.name">{{ bus.name }}</h3>
            
            <div class="d-flex flex-nowrap mb-3 overflow-x-auto hide-scrollbar" style="gap: 4px; padding-bottom: 2px;">
              <v-chip size="small" variant="tonal" color="#709C34" class="font-weight-bold px-2 flex-shrink-0" style="font-size: 10px; background-color: rgba(112, 156, 52, 0.1);">
                <v-icon left size="14" class="mr-1" color="#709C34">mdi-seat-passenger</v-icon> <span class="text-grey-darken-3">21 Seats</span>
              </v-chip>
              <v-chip size="small" variant="tonal" color="#709C34" class="font-weight-bold px-2 flex-shrink-0" style="font-size: 10px; background-color: rgba(112, 156, 52, 0.1);">
                <v-icon left size="14" class="mr-1" color="#709C34">mdi-snowflake</v-icon> <span class="text-grey-darken-3">AC</span>
              </v-chip>
              <v-chip size="small" variant="tonal" color="#709C34" class="font-weight-bold px-2 flex-shrink-0" style="font-size: 10px; background-color: rgba(112, 156, 52, 0.1);">
                <v-icon left size="14" class="mr-1" color="#709C34">mdi-bag-suitcase</v-icon> <span class="text-grey-darken-3">30 Luggage</span>
              </v-chip>
              <v-chip size="small" variant="tonal" color="#709C34" class="font-weight-bold px-2 flex-shrink-0" style="font-size: 10px; background-color: rgba(112, 156, 52, 0.1);">
                <v-icon left size="14" class="mr-1" color="#709C34">mdi-bottle-tonic-outline</v-icon> <span class="text-grey-darken-3">Water Bottle</span>
              </v-chip>
            </div>
            
            <p class="text-caption text-grey-darken-1 mb-3 flex-grow-1" style="line-height: 1.4;">
              {{ bus.description }}
            </p>
            
            <div class="pricing-container bg-green-lighten-5 rounded pa-2 mt-auto border" style="border-color: rgba(112, 156, 52, 0.3) !important;">
              <div class="d-flex justify-space-between align-center mb-1 flex-nowrap" style="white-space: nowrap;">
                <span class="text-caption text-grey-darken-3 font-weight-medium text-truncate mr-1" style="font-size: 10px !important;" title="Local City Travel (4hrs/40km)">Local City Travel (4hrs/40km)</span>
                <div class="d-flex align-center flex-shrink-0">
                  <span class="text-decoration-line-through text-grey mr-1" style="font-size: 10px;">₹{{ bus.localOldPrice }}</span>
                  <span class="font-weight-bold text-green-darken-3" style="font-size: 14px;">₹{{ bus.localPrice }}</span>
                </div>
              </div>
              <v-divider class="my-1 border-opacity-50" color="success"></v-divider>
              <div class="d-flex justify-space-between align-center flex-nowrap" style="white-space: nowrap;">
                <span class="text-caption text-grey-darken-3 font-weight-medium text-truncate mr-1" style="font-size: 10px !important;" title="Outstation (Per km)">Outstation (Per km)</span>
                <div class="d-flex align-center flex-shrink-0">
                  <span class="text-decoration-line-through text-grey mr-1" style="font-size: 10px;">₹{{ bus.outstationOldPrice }}</span>
                  <span class="font-weight-bold text-green-darken-3" style="font-size: 14px;">₹{{ bus.outstationPrice }}</span>
                </div>
              </div>
            </div>
          </v-card-text>
          
          <v-divider></v-divider>
          
          <v-card-actions class="pa-3 px-4 d-flex justify-space-between bg-grey-lighten-5">
            <v-btn variant="outlined" color="#212121" class="px-4 rounded-lg font-weight-bold bg-white text-caption" height="32" style="text-transform: none; border-color: #e0e0e0 !important;">
              View Buses
            </v-btn>
            <v-btn color="#709C34" variant="tonal" class="px-5 rounded-lg font-weight-bold text-caption" height="32" style="text-transform: none; background-color: rgba(112, 156, 52, 0.1);">
              Book Now
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const buses = [
  {
    name: '21 PAX (2+1) AC Deluxe(TATA)',
    description: 'Luxury AC coach meant for comfortable travels and intercity journeys with all essential amenities for a pleasant ride.',
    localPrice: '900',
    localOldPrice: '1200',
    outstationPrice: '60',
    outstationOldPrice: '80'
  },
  {
    name: '27 PAX (2+2) AC Deluxe(TATA)',
    description: 'Spacious AC coach offering premium comfort for long-distance travel and group tours. Equipped with pushback seats.',
    localPrice: '1000',
    localOldPrice: '1400',
    outstationPrice: '65',
    outstationOldPrice: '90'
  },
  {
    name: '45 PAX (2+2) AC Deluxe(BharatBenz)',
    description: 'High-capacity luxury AC coach perfect for large group travel with advanced suspension for a smooth intercity ride.',
    localPrice: '1500',
    localOldPrice: '2000',
    outstationPrice: '80',
    outstationOldPrice: '110'
  },
  {
    name: '45 PAX (2+2) AC Deluxe(Valvo)',
    description: 'Premium multi-axle Valvo coach delivering ultimate luxury, safety, and comfort for long intercity journeys.',
    localPrice: '1800',
    localOldPrice: '2400',
    outstationPrice: '95',
    outstationOldPrice: '130'
  }
];
</script>

<style scoped>
.custom-border {
  border: 1px solid #e0e0e0;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
}


.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
