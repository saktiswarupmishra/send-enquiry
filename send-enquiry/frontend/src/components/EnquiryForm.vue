<template>
  <v-card class="form-card mx-auto pa-5 pa-sm-8" elevation="2" max-width="640" style="border-radius: 12px; border: 1px solid #e0e0e0;">
    <!-- Header -->
    <div class="text-left mb-6">
      <h2 class="text-h5 font-weight-medium text-grey-darken-4 mb-1">Send an Enquiry</h2>
      <p class="text-body-2 text-grey-darken-1 mb-3">Please fill out the details below to request a quotation.</p>
      <v-progress-linear
        :model-value="progressPercent"
        color="#709C34"
        height="4"
        rounded
        bg-color="grey-lighten-3"
      ></v-progress-linear>
    </div>

    <v-form @submit.prevent="submitForm">
      <!-- Step 1: Service Selection -->
      <transition name="fade-transition" mode="out-in">
        <div v-show="currentStep === 1" key="step1">
          <label class="form-label font-weight-medium text-grey-darken-3 d-block mb-3">What kind of service do you need?</label>
          <v-item-group
            v-model="store.form.serviceType"
            selected-class="service-item-selected"
            class="mb-6"
          >
            <div class="marquee-wrapper">
              <div class="marquee-track">
                <!-- Original Items -->
                <v-item
                  v-for="(service, index) in serviceTypes"
                  :key="service.value"
                  :value="service.value"
                  v-slot="{ isSelected, toggle }"
                >
                  <div class="service-card-wrapper">
                    <v-card
                      :class="['service-card-clean', { 'service-item-selected-clean': isSelected }]"
                      @click="toggle"
                      elevation="0"
                      class="d-flex flex-column align-center justify-center pa-2 text-center"
                      height="104"
                      width="100"
                      rounded="xl"
                    >
                      <div class="icon-square mb-2" :class="{ 'icon-square-active': isSelected }">
                        <v-icon :size="26" :color="isSelected ? 'white' : '#709C34'">{{ service.icon }}</v-icon>
                      </div>
                      <div class="text-caption font-weight-bold" :class="isSelected ? 'text-green-darken-4' : 'text-grey-darken-3'" style="line-height: 1.15; font-size: 0.7rem !important;">{{ service.label }}</div>
                      
                      <div v-if="isSelected" class="service-check-badge-clean">
                        <v-icon color="#ffffff" size="12">mdi-check</v-icon>
                      </div>
                    </v-card>
                  </div>
                </v-item>
                <!-- Duplicate Items for seamless marquee -->
                <v-item
                  v-for="(service, index) in serviceTypes"
                  :key="service.value + '-dup'"
                  :value="service.value"
                  v-slot="{ isSelected, toggle }"
                >
                  <div class="service-card-wrapper">
                    <v-card
                      :class="['service-card-clean', { 'service-item-selected-clean': isSelected }]"
                      @click="toggle"
                      elevation="0"
                      class="d-flex flex-column align-center justify-center pa-2 text-center"
                      height="104"
                      width="100"
                      rounded="xl"
                    >
                      <div class="icon-square mb-2" :class="{ 'icon-square-active': isSelected }">
                        <v-icon :size="26" :color="isSelected ? 'white' : '#709C34'">{{ service.icon }}</v-icon>
                      </div>
                      <div class="text-caption font-weight-bold" :class="isSelected ? 'text-green-darken-4' : 'text-grey-darken-3'" style="line-height: 1.15; font-size: 0.7rem !important;">{{ service.label }}</div>
                      
                      <div v-if="isSelected" class="service-check-badge-clean">
                        <v-icon color="#ffffff" size="12">mdi-check</v-icon>
                      </div>
                    </v-card>
                  </div>
                </v-item>
              </div>
            </div>
          </v-item-group>

          <transition name="fade-transition">
            <div v-if="store.form.serviceType" class="mt-2">
              <!-- Service Packages -->
              <div class="mb-5">
                <label class="form-label font-weight-medium text-grey-darken-3 d-block mb-3">Service Packages</label>
                <v-item-group
                  v-model="store.form.tripType"
                  class="d-flex flex-wrap"
                  style="gap: 16px;"
                  selected-class="selected-package-premium"
                >
                  <v-item
                    v-for="(pkg, index) in tripTypeItems"
                    :key="pkg"
                    :value="pkg"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-card
                      :class="['service-card-clean', { 'service-item-selected-clean': isSelected }]"
                      :style="{ animationDelay: `${index * 0.08}s` }"
                      @click="toggle"
                      elevation="0"
                      class="d-flex align-center px-2 py-2"
                      rounded="xl"
                    >
                      <div class="icon-square mr-3" :class="{ 'icon-square-active': isSelected }" style="width: 40px; height: 40px; border-radius: 10px;">
                        <v-icon :color="isSelected ? 'white' : '#709C34'" size="20">
                          {{ isSelected ? 'mdi-check' : 'mdi-circle-outline' }}
                        </v-icon>
                      </div>
                      <span class="text-body-2 font-weight-bold pr-3" :class="isSelected ? 'text-green-darken-4' : 'text-grey-darken-3'">{{ pkg }}</span>
                    </v-card>
                  </v-item>
                </v-item-group>
              </div>

              <label class="form-label font-weight-medium text-grey-darken-3 d-block mb-3">Vehicle Details</label>
              
              <!-- Service Specific Fields -->
              <v-row dense class="mb-2" v-if="store.form.serviceType === 'airport'">
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="store.form.airportName"
                    :items="['Indira Gandhi International Airport (DEL)', 'Chhatrapati Shivaji Airport (BOM)', 'Kempegowda International Airport (BLR)', 'Other']"
                    label="Airport Name"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="store.form.flightNumber"
                    label="Flight Number (optional)"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row dense class="mb-2" v-if="store.form.serviceType === 'wedding' || store.form.serviceType === 'group' || store.form.serviceType === 'corporate' || store.form.serviceType === 'school'">
                <v-col cols="12">
                  <v-text-field
                    v-model="store.form.eventVenue"
                    :label="store.form.serviceType === 'wedding' ? 'Event Venue' : store.form.serviceType === 'group' ? 'Destination' : store.form.serviceType === 'corporate' ? 'Company/Event Name' : 'School Name/Event Info'"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Standard Vehicle Fields -->
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="store.form.destination"
                    :items="destinationItems"
                    label="Destination"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mb-3"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="store.form.tripType"
                    :items="tripTypeItems"
                    label="Trip Type"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mb-3"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="store.form.vehicleType"
                    :items="['AC Seater Buses', 'AC Sleeper Buses', 'Traveller / Minivan', 'Car / SUV / Sedan']"
                    label="Vehicle Type"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mb-3"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="store.form.vehicleName"
                    :items="vehicleNameItems"
                    label="Preferred Vehicle"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="mb-3"
                  ></v-select>
                </v-col>
              </v-row>

              <!-- Fare Estimate -->
              <div v-if="computedFare" class="px-4 py-3 mt-1 mb-4 d-flex align-center justify-space-between rounded bg-grey-lighten-4 border-sm">
                <div>
                  <div class="text-caption text-grey-darken-1 font-weight-medium mb-1">Estimated Fare</div>
                  <div class="text-body-2">{{ computedFare.breakdown }}</div>
                </div>
                <div class="text-right">
                  <div class="text-decoration-line-through text-caption text-grey">₹{{ computedFare.oldPrice }}</div>
                  <div class="text-subtitle-1 font-weight-bold text-green-darken-3">₹{{ computedFare.newPrice }}</div>
                </div>
              </div>
            </div>
          </transition>

          <v-btn
            color="#709C34"
            class="text-none font-weight-medium mt-4 elevation-0"
            block
            size="large"
            @click="currentStep = 2"
            :disabled="!store.form.serviceType"
          >
            Next
          </v-btn>
        </div>
      </transition>

      <!-- Step 2: Trip Details -->
      <transition name="fade-transition" mode="out-in">
        <div v-show="currentStep === 2" key="step2">
          <div class="d-flex align-center justify-space-between mb-4">
            <label class="form-label font-weight-medium text-grey-darken-3">When and where are you traveling?</label>
            <span class="text-caption text-grey">Step 2 of 3</span>
          </div>
          
          <v-row dense>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="store.form.travelDate"
                type="date"
                label="Date"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="store.form.travelTime"
                type="time"
                label="Time"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="store.form.passengers"
                type="number"
                label="Passengers"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense class="mt-2">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="store.form.pickupPoint"
                label="Pickup Address"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="store.form.dropPoint"
                label="Drop-off Address"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
          </v-row>

          <div v-if="store.form.stops.length > 0" class="pl-3 border-s border-grey-lighten-2 ml-2 mb-2 mt-2">
            <div v-for="(stop, index) in store.form.stops" :key="index" class="d-flex align-center mb-2">
              <v-text-field
                v-model="store.form.stops[index]"
                :label="`Stop ${index + 1}`"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
              <v-btn icon="mdi-close" variant="text" size="small" color="grey" class="ml-1" @click="store.removeStop(index)"></v-btn>
            </div>
          </div>
          <v-btn variant="plain" color="#709C34" size="small" prepend-icon="mdi-plus" @click="store.addStop" class="text-none mb-6 mt-1 px-0">
            Add a stop
          </v-btn>

          <div class="d-flex align-center gap-3" style="gap: 12px;">
            <v-btn
              variant="outlined"
              color="grey-darken-1"
              class="text-none font-weight-medium"
              size="large"
              @click="currentStep = 1"
              style="min-width: 100px;"
            >
              Back
            </v-btn>
            <v-btn
              color="#709C34"
              class="text-none flex-grow-1 font-weight-medium elevation-0"
              size="large"
              @click="currentStep = 3"
            >
              Next
            </v-btn>
          </div>
        </div>
      </transition>

      <!-- Step 3: Your Info -->
      <transition name="fade-transition" mode="out-in">
        <div v-show="currentStep === 3" key="step3">
          <div class="d-flex align-center justify-space-between mb-4">
            <label class="form-label font-weight-medium text-grey-darken-3">How can we reach you?</label>
            <span class="text-caption text-grey">Step 3 of 3</span>
          </div>
          
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="store.form.fullName"
                label="Full Name"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="store.form.phone"
                label="Phone Number"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="store.form.email"
                label="Email Address"
                type="email"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="mb-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="store.form.notes"
                label="Additional Notes (Optional)"
                variant="outlined"
                density="comfortable"
                rows="3"
                hide-details="auto"
                class="mb-4"
              ></v-textarea>
            </v-col>
          </v-row>

          <div class="d-flex gap-3 mt-2" style="gap: 12px;">
            <v-btn
              variant="outlined"
              color="grey-darken-1"
              class="text-none font-weight-medium"
              size="large"
              @click="currentStep = 2"
              style="min-width: 100px;"
            >
              Back
            </v-btn>
            <v-btn
              color="#709C34"
              class="text-none flex-grow-1 font-weight-bold elevation-0"
              size="large"
              type="submit"
              :loading="submitting"
            >
              Submit Enquiry
            </v-btn>
          </div>
          <p class="text-caption text-center text-grey mt-4 mb-0">
            <v-icon size="small" class="mr-1">mdi-lock-outline</v-icon>
            Your information is secure.
          </p>
        </div>
      </transition>
    </v-form>

    <!-- Success Overlay -->
    <v-overlay :model-value="showSuccess" class="align-center justify-center rounded-lg" contained scrim="white" opacity="0.95">
      <div class="text-center">
        <v-icon color="#709C34" size="64" class="mb-4">mdi-check-circle-outline</v-icon>
        <div class="text-h6 font-weight-medium text-grey-darken-4">Enquiry Sent!</div>
        <div class="text-body-2 text-grey-darken-1 mt-1">We'll get back to you with a quotation shortly.</div>
      </div>
    </v-overlay>
  </v-card>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEnquiryStore } from '../store/enquiryStore'

const route = useRoute()
const store = useEnquiryStore()
const submitting = ref(false)
const showSuccess = ref(false)
const currentStep = ref(1)

const serviceTypes = [
  { value: 'local', label: 'Local Trip', icon: 'mdi-city' },
  { value: 'outstation', label: 'Outstation', icon: 'mdi-map-marker-distance' },
  { value: 'wedding', label: 'Wedding', icon: 'mdi-heart-outline' },
  { value: 'group', label: 'Group Tours', icon: 'mdi-account-group' },
  { value: 'airport', label: 'Airport', icon: 'mdi-airplane' },
  { value: 'corporate', label: 'Corporate', icon: 'mdi-briefcase-outline' },
  { value: 'school', label: 'School', icon: 'mdi-bus-school' }
]

const destinationItems = computed(() => {
  if (store.form.serviceType === 'airport') return ['Airport Pickup', 'Airport Drop-off', 'Airport Round Trip']
  if (store.form.serviceType === 'local') return ['Local City Travel']
  if (store.form.serviceType === 'outstation') return ['Outstation']
  if (store.form.serviceType === 'wedding') return ['Wedding Venue', 'Pre-Wedding shoot', 'Guest Transfer']
  if (store.form.serviceType === 'group') return ['Sightseeing', 'Pilgrimage', 'Holiday Package']
  if (store.form.serviceType === 'corporate') return ['Office Commute', 'Corporate Offsite', 'Conference/Event']
  if (store.form.serviceType === 'school') return ['Picnic/Excursion', 'Educational Tour', 'Daily Transport']
  return ['Local City Travel', 'Outstation']
})

const tripTypeItems = computed(() => {
  if (store.form.serviceType === 'airport' || store.form.serviceType === 'outstation') {
    return ['One Way', 'Round Trip', 'Multi-City']
  }
  if (store.form.serviceType === 'wedding') return ['Half Day', 'Full Day', 'Multi-Day']
  if (store.form.serviceType === 'group') return ['Multi-Day Tour', 'Weekend Trip']
  if (store.form.serviceType === 'corporate') return ['One Way', 'Round Trip', 'Monthly Contract']
  if (store.form.serviceType === 'school') return ['Same Day Return', 'Multi-Day Camp']
  return ['4hrs/40km', '8hrs/80km', '12hrs/120km', '16hrs/160km', '24hrs/200km']
})

const vehicleNameItems = [
  '21 Paks (2+1) AC Deluxe(TATA)',
  '27 Paks (2+2) AC Deluxe(TATA)',
  '45 Paks (2+2) AC Deluxe(BharatBenz)',
  '45 Paks (2+2) AC Deluxe(Valvo)'
]

const vehiclePricing = {
  '21 Paks (2+1) AC Deluxe(TATA)':       { localPrice: 900,  localOldPrice: 1200, outstationPrice: 60,  outstationOldPrice: 80  },
  '27 Paks (2+2) AC Deluxe(TATA)':       { localPrice: 1000, localOldPrice: 1400, outstationPrice: 65,  outstationOldPrice: 90  },
  '45 Paks (2+2) AC Deluxe(BharatBenz)': { localPrice: 1500, localOldPrice: 2000, outstationPrice: 80,  outstationOldPrice: 110 },
  '45 Paks (2+2) AC Deluxe(Valvo)':      { localPrice: 1800, localOldPrice: 2400, outstationPrice: 95,  outstationOldPrice: 130 }
}

const extractKmFromTripType = (tripType) => {
  if (!tripType) return 0
  const match = tripType.match(/(\d+)km/)
  return match ? parseInt(match[1]) : 0
}

const computedFare = computed(() => {
  const vehicle = store.form.vehicleName
  const pricing = vehiclePricing[vehicle]
  if (!pricing) return null

  const serviceType = store.form.serviceType
  const tripType = store.form.tripType

  if (serviceType === 'local') {
    const packageKm = extractKmFromTripType(tripType)
    if (packageKm > 0) {
      return {
        oldPrice: pricing.localOldPrice.toLocaleString('en-IN'),
        newPrice: pricing.localPrice.toLocaleString('en-IN'),
        breakdown: `${vehicle.split('(')[0].trim()} • ${packageKm} km local package`
      }
    }
  }

  return {
    oldPrice: pricing.outstationOldPrice.toLocaleString('en-IN'),
    newPrice: pricing.outstationPrice.toLocaleString('en-IN'),
    breakdown: `${vehicle.split('(')[0].trim()} • ₹${pricing.outstationPrice}/km outstation rate`
  }
})

watch(computedFare, (val) => {
  store.form.expectedFare = val ? `₹${val.newPrice}` : ''
})

const progressPercent = computed(() => {
  const fields = [
    store.form.serviceType,
    store.form.destination,
    store.form.tripType,
    store.form.vehicleType,
    store.form.vehicleName,
    store.form.pickupPoint,
    store.form.dropPoint,
    store.form.travelDate,
    store.form.travelTime,
    store.form.passengers,
    store.form.fullName,
    store.form.phone,
    store.form.email,
  ]
  const filled = fields.filter(f => f && String(f).trim()).length
  return Math.round((filled / fields.length) * 100)
})

onMounted(() => {
  if (store.form.stops.length === 0) {
    store.addStop()
  }
  
  // Handle service pre-selection from query params
  if (route.query.service) {
    store.form.serviceType = route.query.service
  }
})

// Watch for route query changes to update service type
watch(() => route.query.service, (newService) => {
  if (newService) {
    store.form.serviceType = newService
    currentStep.value = 1 // Reset to step 1 to show service details
  }
})

const submitForm = async () => {
  submitting.value = true
  const res = await store.submitEnquiry()
  submitting.value = false
  if (res.success) {
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
      store.resetForm()
      currentStep.value = 1
    }, 2500)
  } else {
    alert('Failed to submit enquiry. Please try again.')
  }
}
</script>

<style scoped>
.form-card {
  font-family: inherit;
}
.marquee-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 15px 0 25px 0;
  border-radius: 12px;
}

.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}
.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, white, transparent);
}
.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, white, transparent);
}

.marquee-track {
  display: flex;
  gap: 14px;
  width: fit-content;
  animation: scrollLeft 18s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  /* Translate exactly by 50% plus half the gap size to perfectly loop the two groups */
  100% { transform: translateX(calc(-50% - 7px)); }
}

.service-card-wrapper {
  flex-shrink: 0;
}

.service-card-clean {
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.service-card-clean:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  border-color: #b8d494;
}

.service-item-selected-clean {
  background-color: #f4f8f0 !important;
  border: 1px solid #709C34 !important;
  box-shadow: 0 4px 12px rgba(112, 156, 52, 0.15) !important;
}

.icon-square {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  background-color: #f0f4ea;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.icon-square-active {
  background-color: #709C34;
  box-shadow: 0 4px 8px rgba(112, 156, 52, 0.3);
}

.service-check-badge-clean {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #709C34;
  border-radius: 50%;
  border: 2px solid white;
  animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.package-card-premium {
  position: relative;
  cursor: pointer;
  background: linear-gradient(to bottom, #ffffff, #fcfcfc);
  border: 1px solid rgba(0,0,0,0.06);
  /* Packaging thickness */
  border-bottom: 3px solid #e0e6ed;
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  min-width: max-content;
  box-shadow: 0 4px 8px rgba(0,0,0,0.02);
}

.package-card-premium:hover {
  border-bottom-color: #a3c47a;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(112, 156, 52, 0.08) !important;
}

.selected-package-premium {
  background: linear-gradient(to bottom, #f7faf3, #edf4e3) !important;
  border: 1px solid #709C34 !important;
  border-bottom: 1px solid #587d27 !important;
  transform: translateY(2px);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
}

.selected-package-premium::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, #8cbd4f, #709C34);
}

@keyframes pop-in {
  0% { transform: scale(0); opacity: 0; }
  80% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-transition-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.v-overlay__content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}
</style>
