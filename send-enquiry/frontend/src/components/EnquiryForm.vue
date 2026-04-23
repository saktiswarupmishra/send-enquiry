<template>
  <v-card class="pa-8 rounded-xl elevation-0 form-card">
    <v-form @submit.prevent="submitForm">
      <!-- Section 1 -->
      <div class="d-flex align-center mb-6">
        <v-avatar color="#EDF0E8" size="32" class="mr-3 font-weight-bold" style="color: #6A8D3F;">1</v-avatar>
        <h2 class="text-h6 font-weight-bold mb-0 text-grey-darken-4">Vehicle Details</h2>
      </div>
      
      <v-row dense class="mb-2">
        <v-col cols="12" sm="6">
          <p class="text-caption text-grey-darken-1 font-weight-medium mb-1">Destination</p>
          <v-select
            v-model="store.form.destination"
            :items="['Local City Travel', 'Outstation']"
            placeholder="Select Destination"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="text-caption text-grey-darken-1 font-weight-medium mb-1">Trip Type</p>
          <v-select
            v-model="store.form.tripType"
            :items="['4hrs/40km', '8hrs/80km', '12hrs/120km', '16hrs/160km', '24hrs/200km']"
            placeholder="Select Trip Type"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-select>
        </v-col>
      </v-row>

      <v-row dense class="mb-4">
        <v-col cols="12" sm="6">
            <p class="text-caption text-grey-darken-1 font-weight-medium mb-1">Vehicle Type</p>
            <v-select
              v-model="store.form.vehicleType"
              :items="['AC Seater Buses', 'AC Sleeper Buses', 'Traveller / Minivan', 'Car / SUV / Sedan']"
              placeholder="Select Vehicle Type"
              variant="outlined"
              density="comfortable"
              hide-details
              bg-color="white"
              class="custom-input"
            ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
            <p class="text-caption text-grey-darken-1 font-weight-medium mb-1">Vehicle Name</p>
            <v-select
              v-model="store.form.vehicleName"
              :items="['9 Seater (1+1) Maharaja Force Motor', '9 Seater (1+1) Maharaja Urbania', '12 Seater (1+1) Maharaja Force Motor', '12 Seater (2+1) Luxury Force Motor', '12 Seater (2+1) Luxury Urbania', '16 Seater (2+1) Luxury Force Motor', '16 Seater (2+1) Luxury Urbania', '20 Seater (2+1) Luxury Force Motor', '25 Seater (2+2) Luxury Force Motor']"
              placeholder="Select Vehicle Name"
              variant="outlined"
              density="comfortable"
              hide-details
              bg-color="white"
              class="custom-input"
            ></v-select>
        </v-col>
      </v-row>

      <v-row dense class="mb-2">
        <v-col cols="12">
          <v-text-field
            v-model="store.form.pickupPoint"
            placeholder="Enter Pickup Point"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-text-field>
        </v-col>
      </v-row>
        
      <!-- Stops -->
      <v-row dense v-for="(stop, index) in store.form.stops" :key="index" class="mb-2">
        <v-col cols="12">
          <div class="position-relative">
            <v-text-field
              v-model="store.form.stops[index]"
              :placeholder="`Add Stop ${index + 1}`"
              variant="outlined"
              density="comfortable"
              hide-details
              bg-color="white"
              class="custom-input pr-12"
            ></v-text-field>
            <a href="#" @click.prevent="store.removeStop(index)" class="text-error text-caption text-decoration-none font-weight-medium position-absolute" style="top: 14px; right: 16px;">Remove</a>
          </div>
        </v-col>
      </v-row>
      
      <v-row dense>
        <v-col cols="12" class="text-right pb-4 pt-1 cursor-pointer">
          <a href="#" @click.prevent="store.addStop" class="text-grey-darken-2 font-weight-medium text-decoration-none text-body-2">Add Stop</a>
        </v-col>
      </v-row>

      <!-- Section 2 -->
      <div class="d-flex align-center mb-6 mt-4">
        <v-avatar color="#EDF0E8" size="32" class="mr-3 font-weight-bold" style="color: #6A8D3F;">2</v-avatar>
        <h2 class="text-h6 font-weight-bold mb-0 text-grey-darken-4">Customer Information</h2>
      </div>

      <v-row dense class="mb-2">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="store.form.fullName"
            placeholder="Full Name"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="store.form.phone"
            placeholder="Phone Number"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row dense class="mb-2">
        <v-col cols="12">
          <v-text-field
            v-model="store.form.email"
            placeholder="Official Email Address"
            variant="outlined"
            density="comfortable"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <p class="text-caption text-grey-darken-4 font-weight-bold mb-2">NOTES</p>
          <v-textarea
            v-model="store.form.notes"
            placeholder="Type Here . . ."
            variant="outlined"
            rows="3"
            hide-details
            bg-color="white"
            class="custom-input"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-btn
        color="#709C34"
        size="x-large"
        type="submit"
        block
        class="mt-8 font-weight-bold text-white rounded-lg elevation-0"
      >
        SEND ENQUIRY <v-icon right class="ml-2">mdi-arrow-right</v-icon>
      </v-btn>
      <p class="text-center text-caption text-grey mt-3 mb-0">After clicking "Send Enquiry", you will receive a call from Ant Travels for quotation.</p>
    </v-form>
  </v-card>
</template>

<script setup>
import { onMounted } from 'vue'
import { useEnquiryStore } from '../store/enquiryStore'

const store = useEnquiryStore()

onMounted(() => {
  if (store.form.stops.length === 0) {
    store.addStop()
    store.addStop()
  }
})

const submitForm = async () => {
  const res = await store.submitEnquiry()
  if (res.success) {
    alert('Enquiry submitted successfully!')
    store.form = {
      destination: '', tripType: '', vehicleType: '', vehicleName: '',
      pickupPoint: '', stops: ['', ''], fullName: '', phone: '', email: '', notes: ''
    }
  } else {
    alert('Failed to submit enquiry.')
  }
}
</script>

<style scoped>
.form-card {
  background-color: white;
  border-radius: 20px;
}
.custom-input :deep(.v-field__outline__start) {
  border-color: #E0E0E0 !important;
}
.custom-input :deep(.v-field__outline__end) {
  border-color: #E0E0E0 !important;
}
.custom-input :deep(.v-field__outline__notch::before) {
  border-color: #E0E0E0 !important;
}
.custom-input :deep(.v-field__outline__notch::after) {
  border-color: #E0E0E0 !important;
}
.custom-input :deep(.v-field) {
  border-radius: 8px;
}
</style>
