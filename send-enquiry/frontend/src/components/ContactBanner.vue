<template>
  <v-card class="pa-10 rounded-xl elevation-3 bg-white mb-10 text-center">
    <div class="d-flex justify-center mb-4">
      <v-chip color="#709C34" variant="tonal" size="small" class="font-weight-bold px-4">
         <v-icon left size="small" class="mr-1">mdi-circle</v-icon> 24x7 AVAILABLE
      </v-chip>
    </div>
    
    <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2" style="line-height: 1.3;">
      24x7 Bus Booking in Delhi NCR <br> Contact ANT Travels
    </h2>
    <p class="text-body-1 text-grey-darken-1 mb-8">
      Need Instant booking for bus hire in Delhi NCR? Contact us now for quick response and best pricing.
    </p>

    <v-row class="mb-8 justify-center">
      <v-col cols="12" sm="4">
        <v-card variant="outlined" class="pa-4 text-left rounded-lg text-grey-darken-4 custom-border h-100">
           <v-avatar color="#f9fbea" size="40" class="mb-3">
              <v-icon color="#709C34">mdi-headset</v-icon>
           </v-avatar>
           <p class="text-caption font-weight-bold text-uppercase text-grey-darken-1 mb-1" style="font-size: 10px !important;">TOLL-FREE SUPPORT</p>
           <p class="font-weight-black text-h6 mb-0">1800-1027-408</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card variant="outlined" class="pa-4 text-left rounded-lg text-grey-darken-4 custom-border h-100">
           <v-avatar color="#f9fbea" size="40" class="mb-3">
              <v-icon color="#709C34">mdi-whatsapp</v-icon>
           </v-avatar>
           <p class="text-caption font-weight-bold text-uppercase text-grey-darken-1 mb-1" style="font-size: 10px !important;">WHATSAPP BOOKING</p>
           <p class="font-weight-black text-h6 mb-0">9811992209, 9811992203</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card variant="outlined" class="pa-4 text-left rounded-lg text-grey-darken-4 custom-border h-100">
           <v-avatar color="#f9fbea" size="40" class="mb-3">
              <v-icon color="#709C34">mdi-email-outline</v-icon>
           </v-avatar>
           <p class="text-caption font-weight-bold text-uppercase text-grey-darken-1 mb-1" style="font-size: 10px !important;">EMAIL</p>
           <p class="font-weight-black text-subtitle-1 mb-0" style="word-break: break-all;">booking@anttravels.com</p>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-flex justify-center flex-wrap" style="gap: 16px;">
      <v-btn color="#6B8E23" class="px-8 rounded-pill font-weight-bold text-white shadow-sm" height="48" elevation="0">
        BOOK NOW <v-icon right class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn variant="outlined" color="#6B8E23" class="px-8 rounded-pill font-weight-bold bg-white" height="48">
        <v-icon left class="mr-2">mdi-whatsapp</v-icon> CHAT ON WHATSAPP
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
</script>

<style scoped>
.custom-border {
  border: 1px solid #e0e0e0;
}
.shadow-sm {
  box-shadow: 0 4px 12px rgba(107, 142, 35, 0.2) !important;
}
</style>
