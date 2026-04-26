<template>
  <v-card class="form-card pa-0 rounded-xl elevation-0">

    <!-- Step Indicator -->
    <div class="step-header">
      <div class="step-pills">
        <div
          class="step-pill"
          :class="{ active: currentStep === 1, completed: currentStep > 1 }"
          @click="goToStep(1)"
        >
          <div class="pill-number">
            <v-icon v-if="currentStep > 1" size="14" color="white">mdi-check</v-icon>
            <span v-else>1</span>
          </div>
          <span class="pill-label">Service</span>
        </div>
        <div class="step-connector" :class="{ active: currentStep > 1 }"></div>
        <div
          class="step-pill"
          :class="{ active: currentStep === 2, completed: currentStep > 2 }"
          @click="currentStep > 1 ? goToStep(2) : null"
        >
          <div class="pill-number">
            <v-icon v-if="currentStep > 2" size="14" color="white">mdi-check</v-icon>
            <span v-else>2</span>
          </div>
          <span class="pill-label">Trip Details</span>
        </div>
        <div class="step-connector" :class="{ active: currentStep > 2 }"></div>
        <div
          class="step-pill"
          :class="{ active: currentStep === 3 }"
          @click="currentStep > 2 ? goToStep(3) : null"
        >
          <div class="pill-number">3</div>
          <span class="pill-label">Your Info</span>
        </div>
      </div>
      <p class="text-caption text-grey-darken-1 mt-3 mb-0 text-center font-weight-medium">
        Step {{ currentStep }} of 3 &mdash; {{ progressPercent }}% completed
      </p>
    </div>

    <v-form @submit.prevent="submitForm">

      <!-- ═══════════════════════════════════════════════ -->
      <!-- STEP 3: Customer Information                    -->
      <!-- ═══════════════════════════════════════════════ -->
      <transition :name="transitionName" mode="out-in">
        <div v-if="currentStep === 3" key="step3">
          <div class="section-block">
            <div class="d-flex align-center mb-5">
              <div class="step-indicator active">
                <v-icon size="18" color="white">mdi-account-circle</v-icon>
              </div>
              <div class="ml-3">
                <h2 class="section-title mb-0">Your Information</h2>
                <p class="text-caption text-grey-darken-1 mb-0">How can we reach you?</p>
              </div>
            </div>

            <v-row dense class="mb-2">
              <v-col cols="12" sm="6">
                <label class="field-label">Full Name</label>
                <v-text-field
                  v-model="store.form.fullName"
                  placeholder="Your Name"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-account-outline"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <label class="field-label">Phone Number</label>
                <v-text-field
                  v-model="store.form.phone"
                  placeholder="+91 1234567897"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-phone-outline"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense class="mb-2">
              <v-col cols="12">
                <label class="field-label">Email Address</label>
                <v-text-field
                  v-model="store.form.email"
                  placeholder="you@company.com"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <label class="field-label d-flex align-center">
                  <v-icon size="14" color="#709C34" class="mr-1">mdi-note-text-outline</v-icon>
                  Additional Notes
                </label>
                <v-textarea
                  v-model="store.form.notes"
                  placeholder="Any special requests, luggage details, accessibility needs..."
                  variant="outlined"
                  rows="3"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                ></v-textarea>
              </v-col>
            </v-row>
          </div>

          <!-- Submit Section for Step 3 -->
          <div class="submit-section">
            <div class="d-flex ga-3">
              <v-btn
                variant="outlined"
                color="#709C34"
                size="x-large"
                class="back-btn font-weight-bold rounded-xl elevation-0"
                @click="goToStep(2)"
                style="flex: 0 0 auto; min-width: 140px;"
              >
                <v-icon left class="mr-2">mdi-arrow-left</v-icon>
                BACK
              </v-btn>
              <v-btn
                color="#709C34"
                size="x-large"
                type="submit"
                class="submit-btn font-weight-bold text-white rounded-xl elevation-0"
                :loading="submitting"
                style="flex: 1;"
              >
                <v-icon left class="mr-2">mdi-send</v-icon>
                SEND ENQUIRY
                <v-icon right class="ml-2">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            <div class="d-flex align-center justify-center mt-4">
              <v-icon size="14" color="grey" class="mr-1">mdi-shield-check</v-icon>
              <p class="text-caption text-grey mb-0">
                Your information is secure. After submitting, Ant Travels will call you with a quotation.
              </p>
            </div>
          </div>
        </div>
      </transition>

      <!-- ═══════════════════════════════════════════════ -->
      <!-- STEP 1: Service + Vehicle                       -->
      <!-- ═══════════════════════════════════════════════ -->
      <transition :name="transitionName" mode="out-in">
        <div v-if="currentStep === 1" key="step1">

          <!-- SECTION: Service Type -->
          <div class="section-block section-1-bg">
            <div class="d-flex align-center mb-5">
              <div class="step-indicator" :class="{ active: true }">
                <v-icon size="18" color="white">mdi-map-marker-path</v-icon>
              </div>
              <div class="ml-3">
                <h2 class="section-title mb-0">Choose Your Service</h2>
                <p class="text-caption text-grey-darken-1 mb-0">Select the type of travel you need</p>
              </div>
            </div>

            <div class="marquee-container">
              <div class="marquee-track">
                <div
                  v-for="(service, index) in serviceTypes.concat(serviceTypes)" :key="index"
                  class="service-card-mini"
                  :class="{ selected: store.form.serviceType === service.value }"
                  @click="store.form.serviceType = service.value"
                >
                  <div class="service-card-icon" :class="{ 'icon-active': store.form.serviceType === service.value }">
                    <v-icon size="18" :color="store.form.serviceType === service.value ? 'white' : '#709C34'">{{ service.icon }}</v-icon>
                  </div>
                  <h3 class="service-card-title">{{ service.label }}</h3>
                  <div class="service-check" v-if="store.form.serviceType === service.value">
                    <v-icon size="12" color="white">mdi-check</v-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section divider + Vehicle Details (revealed on service select) -->
          <transition name="vehicle-reveal">
          <div v-if="store.form.serviceType" key="vehicle-details-wrapper">

          <!-- Section divider -->
          <div class="section-divider">
            <div class="divider-line"></div>
            <v-icon size="20" color="#709C34" class="divider-icon">mdi-chevron-down</v-icon>
            <div class="divider-line"></div>
          </div>

          <!-- SECTION: Vehicle Details -->
          <div class="section-block">
            <div class="d-flex align-center mb-5">
              <div class="step-indicator" :class="{ active: store.form.serviceType }">
                <v-icon size="18" color="white">mdi-bus</v-icon>
              </div>
              <div class="ml-3">
                <h2 class="section-title mb-0">Vehicle Details</h2>
                <p class="text-caption text-grey-darken-1 mb-0">Configure your ride preferences</p>
              </div>
            </div>

            <!-- Airport-specific fields (animated reveal) -->
            <transition name="slide-fade">
              <div v-if="store.form.serviceType === 'airport'" class="airport-highlight mb-5">
                <div class="d-flex align-center mb-3">
                  <v-icon color="#1565C0" size="20" class="mr-2">mdi-airplane</v-icon>
                  <span class="font-weight-bold text-blue-darken-3 text-body-2">Airport Transfer Details</span>
                </div>
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Airport Name</label>
                    <v-select
                      v-model="store.form.airportName"
                      :items="['Indira Gandhi International Airport (DEL)', 'Chhatrapati Shivaji Airport (BOM)', 'Kempegowda International Airport (BLR)', 'Rajiv Gandhi International Airport (HYD)', 'Chennai International Airport (MAA)', 'Netaji Subhash Chandra Bose Airport (CCU)', 'Other']"
                      placeholder="Select Airport"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Flight Number <span class="text-grey">(optional)</span></label>
                    <v-text-field
                      v-model="store.form.flightNumber"
                      placeholder="e.g. AI-302"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-airplane-takeoff"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </transition>

            <!-- Wedding-specific fields -->
            <transition name="slide-fade">
              <div v-if="store.form.serviceType === 'wedding'" class="mb-5">
                <div class="d-flex align-center mb-3">
                  <v-icon color="#E53935" size="20" class="mr-2">mdi-heart-outline</v-icon>
                  <span class="font-weight-bold text-red-darken-3 text-body-2">Wedding Transport Details</span>
                </div>
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Event Venue(s)</label>
                    <v-text-field
                      v-model="store.form.eventVenue"
                      placeholder="e.g. The Grand Palace"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-map-marker-star"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Vehicles Needed</label>
                    <v-text-field
                      v-model="store.form.vehiclesNeeded"
                      type="number"
                      placeholder="e.g. 3"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-bus-multiple"
                      min="1"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </transition>

            <!-- Group Tours fields -->
            <transition name="slide-fade">
              <div v-if="store.form.serviceType === 'group'" class="mb-5">
                <div class="d-flex align-center mb-3">
                  <v-icon color="#FF8F00" size="20" class="mr-2">mdi-account-group</v-icon>
                  <span class="font-weight-bold text-orange-darken-3 text-body-2">Group Tour Details</span>
                </div>
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Tour Destination</label>
                    <v-text-field
                      v-model="store.form.tourDestination"
                      placeholder="e.g. Golden Triangle Tour"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-map-marker-path"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Duration (Days)</label>
                    <v-text-field
                      v-model="store.form.tourDurationDays"
                      type="number"
                      placeholder="e.g. 5"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-calendar-range"
                      min="1"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </transition>

            <!-- Corporate fields -->
            <transition name="slide-fade">
              <div v-if="store.form.serviceType === 'corporate'" class="mb-5">
                <div class="d-flex align-center mb-3">
                  <v-icon color="#455A64" size="20" class="mr-2">mdi-briefcase-outline</v-icon>
                  <span class="font-weight-bold text-blue-grey-darken-3 text-body-2">Corporate Travel Details</span>
                </div>
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Company Name</label>
                    <v-text-field
                      v-model="store.form.companyName"
                      placeholder="e.g. Acme Corp"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-domain"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Event/Purpose</label>
                    <v-text-field
                      v-model="store.form.eventPurpose"
                      placeholder="e.g. Annual Offsite, Daily Commute"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-notebook-outline"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </transition>

            <!-- School fields -->
            <transition name="slide-fade">
              <div v-if="store.form.serviceType === 'school'" class="mb-5">
                <div class="d-flex align-center mb-3">
                  <v-icon color="#00838F" size="20" class="mr-2">mdi-bus-school</v-icon>
                  <span class="font-weight-bold text-cyan-darken-3 text-body-2">School Trip Details</span>
                </div>
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <label class="field-label">School Name</label>
                    <v-text-field
                      v-model="store.form.schoolName"
                      placeholder="e.g. Delhi Public School"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-school-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="field-label">Grade / Class</label>
                    <v-text-field
                      v-model="store.form.gradeClass"
                      placeholder="e.g. Class 10"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                      bg-color="white"
                      class="premium-input"
                      prepend-inner-icon="mdi-account-group-outline"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </transition>

            <v-row dense class="mb-2">
              <v-col cols="12" sm="6">
                <label class="field-label">Destination</label>
                <v-select
                  v-model="store.form.destination"
                  :items="destinationItems"
                  placeholder="Select Destination"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <label class="field-label">Trip Type</label>
                <v-select
                  v-model="store.form.tripType"
                  :items="tripTypeItems"
                  placeholder="Select Trip Type"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                ></v-select>
              </v-col>
            </v-row>

            <v-row dense class="mb-2">
              <v-col cols="12" sm="6">
                <label class="field-label">Vehicle Type</label>
                <v-select
                  v-model="store.form.vehicleType"
                  :items="['AC Seater Buses', 'AC Sleeper Buses', 'Traveller / Minivan', 'Car / SUV / Sedan']"
                  placeholder="Select Vehicle Type"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <label class="field-label">Vehicle Name</label>
                <v-select
                  v-model="store.form.vehicleName"
                  :items="vehicleNameItems"
                  placeholder="Select Vehicle Name"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                ></v-select>
              </v-col>
            </v-row>
            <v-row dense class="mb-2">
              <v-col cols="12">
                <label class="field-label">Fare</label>
                <div v-if="computedFare" class="fare-card">
                  <div class="fare-card-header">
                    <v-icon size="16" color="#709C34" class="mr-1">mdi-tag-check-outline</v-icon>
                    <span class="fare-label">Estimated Fare</span>
                    <v-chip size="x-small" color="#709C34" variant="flat" class="ml-auto text-white font-weight-bold" style="font-size: 9px;">25% OFF</v-chip>
                  </div>
                  <div class="fare-card-body">
                    <div class="fare-old">₹{{ computedFare.oldPrice }}</div>
                    <div class="fare-new">₹{{ computedFare.newPrice }}</div>
                  </div>
                  <div class="fare-card-footer">
                    <v-icon size="12" color="grey" class="mr-1">mdi-information-outline</v-icon>
                    <span>{{ computedFare.breakdown }}</span>
                  </div>
                </div>
                <div v-else class="fare-card fare-card-empty">
                  <v-icon size="24" color="grey-lighten-1" class="mb-1">mdi-calculator-variant-outline</v-icon>
                  <span class="text-caption text-grey">Select vehicle & enter km to see fare</span>
                </div>
              </v-col>
            </v-row>
          </div>

          </div>
          </transition>

          <!-- Next Button -->
          <div class="submit-section">
            <v-btn
              color="#709C34"
              size="x-large"
              block
              class="submit-btn font-weight-bold text-white rounded-xl elevation-0"
              @click="goToStep(2)"
            >
              NEXT
              <v-icon right class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </transition>

      <!-- ═══════════════════════════════════════════════ -->
      <!-- STEP 2: Trip Details                            -->
      <!-- ═══════════════════════════════════════════════ -->
      <transition :name="transitionName" mode="out-in">
        <div v-if="currentStep === 2" key="step2">

          <!-- SECTION: Trip Details -->
          <div class="section-block section-3-bg">
            <div class="d-flex align-center mb-5">
              <div class="step-indicator" :class="{ active: store.form.vehicleType || store.form.destination }">
                <v-icon size="18" color="white">mdi-calendar-clock</v-icon>
              </div>
              <div class="ml-3">
                <h2 class="section-title mb-0">Trip Details</h2>
                <p class="text-caption text-grey-darken-1 mb-0">When and where are you traveling?</p>
              </div>
            </div>

            <v-row dense class="mb-2">
              <v-col cols="12" sm="4">
                <label class="field-label">Travel Date</label>
                <v-text-field
                  v-model="store.form.travelDate"
                  type="date"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-calendar"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <label class="field-label">Travel Time</label>
                <v-text-field
                  v-model="store.form.travelTime"
                  type="time"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-clock-outline"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <label class="field-label">No. of Passengers</label>
                <v-text-field
                  v-model="store.form.passengers"
                  type="number"
                  placeholder="e.g. 12"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-account-group"
                  min="1"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense class="mb-2">
              <v-col cols="12" sm="6">
                <label class="field-label">Pickup Point</label>
                <v-text-field
                  v-model="store.form.pickupPoint"
                  placeholder="Enter pickup location"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-map-marker"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <label class="field-label">Drop-off Point</label>
                <v-text-field
                  v-model="store.form.dropPoint"
                  placeholder="Enter drop-off location"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-map-marker-check"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Stops -->
            <div class="stops-container mt-3" v-if="store.form.stops.length > 0">
              <label class="field-label d-flex align-center">
                <v-icon size="16" color="#709C34" class="mr-1">mdi-dots-vertical</v-icon>
                Intermediate Stops
              </label>
              <div v-for="(stop, index) in store.form.stops" :key="index" class="stop-row mb-2">
                <v-text-field
                  v-model="store.form.stops[index]"
                  :placeholder="`Stop ${index + 1}`"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  bg-color="white"
                  class="premium-input"
                  prepend-inner-icon="mdi-circle-small"
                >
                  <template v-slot:append-inner>
                    <v-btn
                      icon
                      variant="text"
                      size="x-small"
                      color="error"
                      @click="store.removeStop(index)"
                      class="stop-remove-btn"
                    >
                      <v-icon size="18">mdi-close-circle</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </div>
            </div>

            <div class="text-right mt-2">
              <v-btn
                variant="tonal"
                color="#709C34"
                size="small"
                @click="store.addStop"
                class="rounded-lg text-capitalize font-weight-medium"
                prepend-icon="mdi-plus"
              >
                Add Stop
              </v-btn>
            </div>
          </div>

          <!-- Submit Section with Back + Next -->
          <div class="submit-section">
            <div class="d-flex ga-3">
              <v-btn
                variant="outlined"
                color="#709C34"
                size="x-large"
                class="back-btn font-weight-bold rounded-xl elevation-0"
                @click="goToStep(1)"
                style="flex: 0 0 auto; min-width: 140px;"
              >
                <v-icon left class="mr-2">mdi-arrow-left</v-icon>
                BACK
              </v-btn>
              <v-btn
                color="#709C34"
                size="x-large"
                class="submit-btn font-weight-bold text-white rounded-xl elevation-0"
                @click="goToStep(3)"
                style="flex: 1;"
              >
                NEXT
                <v-icon right class="ml-2">mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </transition>
    </v-form>

    <!-- Success Overlay -->
    <transition name="fade">
      <div v-if="showSuccess" class="success-overlay">
        <div class="success-content">
          <div class="success-icon-ring">
            <v-icon size="48" color="#709C34">mdi-check-circle</v-icon>
          </div>
          <h3 class="text-h5 font-weight-bold mt-4 mb-2">Enquiry Sent!</h3>
          <p class="text-body-2 text-grey-darken-1">We'll get back to you shortly with a quotation.</p>
        </div>
      </div>
    </transition>
  </v-card>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useEnquiryStore } from '../store/enquiryStore'

const store = useEnquiryStore()
const submitting = ref(false)
const showSuccess = ref(false)
const currentStep = ref(1)
const transitionName = ref('step-slide-left')

const goToStep = (step) => {
  if (step > currentStep.value) {
    transitionName.value = 'step-slide-left'
  } else if (step < currentStep.value) {
    transitionName.value = 'step-slide-right'
  }
  currentStep.value = step
}

const serviceTypes = [
  { value: 'local', label: 'Local Trip', icon: 'mdi-city-variant-outline', desc: 'Seamless travel across short local routes.' },
  { value: 'outstation', label: 'Outstation Trip', icon: 'mdi-map-marker-distance', desc: 'Comfortable cross-city and intercity travels.' },
  { value: 'wedding', label: 'Wedding Transport', icon: 'mdi-heart-outline', desc: 'Luxury fleet to complement your special day.' },
  { value: 'group', label: 'Group Tours', icon: 'mdi-account-group', desc: 'Curated sightseeing with knowledgeable crew.' },
  { value: 'airport', label: 'Airport Transfers', icon: 'mdi-airplane-landing', desc: 'Punctual pickups and drop-offs for VIP delegations.' },
  { value: 'corporate', label: 'Corporate Travel', icon: 'mdi-briefcase-outline', desc: 'Productivity-focused interiors for teams on the go.' },
  { value: 'school', label: 'School Trips', icon: 'mdi-bus-school', desc: 'Safety-first transportation for educational excursions.' }
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

// Vehicle pricing data (matches RelatedBus.vue)
const vehiclePricing = {
  '21 Paks (2+1) AC Deluxe(TATA)':       { localPrice: 900,  localOldPrice: 1200, outstationPrice: 60,  outstationOldPrice: 80  },
  '27 Paks (2+2) AC Deluxe(TATA)':       { localPrice: 1000, localOldPrice: 1400, outstationPrice: 65,  outstationOldPrice: 90  },
  '45 Paks (2+2) AC Deluxe(BharatBenz)': { localPrice: 1500, localOldPrice: 2000, outstationPrice: 80,  outstationOldPrice: 110 },
  '45 Paks (2+2) AC Deluxe(Valvo)':      { localPrice: 1800, localOldPrice: 2400, outstationPrice: 95,  outstationOldPrice: 130 }
}

// Extract km from local trip type like '4hrs/40km'
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
  const kms = parseInt(store.form.estimatedKms) || 0

  // Local trip: use package pricing based on trip type km
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

  // Outstation / other: show per-km pricing
  return {
    oldPrice: pricing.outstationOldPrice.toLocaleString('en-IN'),
    newPrice: pricing.outstationPrice.toLocaleString('en-IN'),
    breakdown: `${vehicle.split('(')[0].trim()} • ₹${pricing.outstationPrice}/km outstation rate`
  }
})

// Sync computed fare to store for submission
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
    store.addStop()
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
/* ── Card Container ────────────────────────── */
.form-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

/* ── Step Header ────────────────────────── */
.step-header {
  padding: 28px 32px 12px;
  background: linear-gradient(135deg, #fafcf7 0%, #f0f4e8 100%);
  border-bottom: 1px solid #E8ECE3;
}
.step-pills {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.step-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 50px;
  background: #ECEFF1;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.step-pill.active {
  background: linear-gradient(135deg, #709C34, #8BBF45);
  box-shadow: 0 4px 16px rgba(112, 156, 52, 0.35);
}
.step-pill.completed {
  background: #E8F5E9;
  cursor: pointer;
}
.pill-number {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 800;
  color: #546E7A;
  transition: all 0.3s ease;
}
.step-pill.active .pill-number {
  background: rgba(255,255,255,0.3);
  color: white;
}
.step-pill.completed .pill-number {
  background: #709C34;
  color: white;
}
.pill-label {
  font-size: 13px;
  font-weight: 700;
  color: #78909C;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.step-pill.active .pill-label {
  color: white;
}
.step-pill.completed .pill-label {
  color: #709C34;
}
.step-connector {
  width: 48px;
  height: 3px;
  background: #CFD8DC;
  border-radius: 4px;
  margin: 0 4px;
  transition: background 0.4s ease;
}
.step-connector.active {
  background: linear-gradient(90deg, #709C34, #A4D65E);
}

/* ── Sections ────────────────────────── */
.section-block {
  padding: 28px 32px;
}
.section-1-bg {
  background: linear-gradient(135deg, #fafcf7 0%, #f5f8f0 100%);
}
.section-3-bg {
  background: linear-gradient(135deg, #f7f9fc 0%, #f0f4f8 100%);
}

/* ── Step Indicators ────────────────────────── */
.step-indicator {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #C5C9CC;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.step-indicator.active {
  background: linear-gradient(135deg, #709C34, #8BBF45);
  box-shadow: 0 4px 14px rgba(112, 156, 52, 0.35);
  transform: scale(1.05);
}

.section-title {
  font-size: 18px;
  font-weight: 800;
  color: #263238;
  letter-spacing: -0.3px;
}

/* ── Section Dividers ────────────────────────── */
.section-divider {
  display: flex;
  align-items: center;
  padding: 0 32px;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #D5DAD0, transparent);
}
.divider-icon {
  margin: 0 8px;
  opacity: 0.6;
  animation: bounce-subtle 2s infinite;
}
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

/* ── Service Cards Mini (One Line) ────────────────────────── */
.marquee-container {
  overflow: hidden;
  width: 100%;
  padding-bottom: 12px;
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  gap: 12px;
  animation: scroll-marquee 25s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes scroll-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 6px)); }
}
.service-card-mini {
  flex: 0 0 auto;
  min-width: 120px;
  border: 2px solid #E8ECE3;
  border-radius: 12px;
  padding: 12px 10px;
  text-align: center;
  cursor: pointer;
  background: white;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.service-card-mini:hover {
  border-color: #B0CC8E;
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(112, 156, 52, 0.12);
}
.service-card-mini.selected {
  border-color: #709C34;
  background: linear-gradient(145deg, #f2f9ea 0%, #e8f5d8 100%);
  box-shadow: 0 6px 20px rgba(112, 156, 52, 0.2);
  transform: translateY(-4px) scale(1.02);
}
.service-card-mini .service-card-icon {
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: #EDF3E2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card-mini .service-card-icon.icon-active {
  background: linear-gradient(135deg, #709C34, #8BBF45);
  box-shadow: 0 4px 14px rgba(112, 156, 52, 0.35);
  transform: scale(1.1);
}
.service-card-mini .service-card-title {
  font-size: 11.5px;
  font-weight: 700;
  color: #263238;
  margin-bottom: 0;
  line-height: 1.2;
  white-space: nowrap;
}
.service-card-mini .service-check {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #709C34;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pop-in 0.3s ease;
}



@keyframes pop-in {
  0% { transform: scale(0); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@media (max-width: 900px) {
  .service-card-mini {
    min-width: 110px;
  }
}

/* ── Airport Highlight ────────────────────────── */
.airport-highlight {
  background: linear-gradient(135deg, #E3F2FD, #BBDEFB33);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #90CAF9;
}

/* ── Field Labels ────────────────────────── */
.field-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #546E7A;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

/* ── Premium Inputs ────────────────────────── */
.premium-input :deep(.v-field__outline__start) {
  border-color: #DDE3D5 !important;
}
.premium-input :deep(.v-field__outline__end) {
  border-color: #DDE3D5 !important;
}
.premium-input :deep(.v-field__outline__notch::before) {
  border-color: #DDE3D5 !important;
}
.premium-input :deep(.v-field__outline__notch::after) {
  border-color: #DDE3D5 !important;
}
.premium-input :deep(.v-field) {
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
}
.premium-input :deep(.v-field:hover) {
  box-shadow: 0 2px 12px rgba(112, 156, 52, 0.1);
}
.premium-input :deep(.v-field--focused) {
  box-shadow: 0 0 0 3px rgba(112, 156, 52, 0.15) !important;
}
.premium-input :deep(.v-field--focused .v-field__outline__start) {
  border-color: #709C34 !important;
}
.premium-input :deep(.v-field--focused .v-field__outline__end) {
  border-color: #709C34 !important;
}

/* ── Stops ────────────────────────── */
.stops-container {
  padding: 16px;
  background: #F8FAFB;
  border-radius: 14px;
  border: 1px dashed #CFD8DC;
}
.stop-remove-btn {
  opacity: 0.5;
  transition: opacity 0.2s;
}
.stop-remove-btn:hover {
  opacity: 1;
}

/* ── Submit Section ────────────────────────── */
.submit-section {
  padding: 24px 32px 32px;
}
.submit-btn {
  height: 56px !important;
  font-size: 16px !important;
  letter-spacing: 1.5px;
  background: linear-gradient(135deg, #709C34 0%, #8BBF45 100%) !important;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(112, 156, 52, 0.3) !important;
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(112, 156, 52, 0.4) !important;
}
.back-btn {
  height: 56px !important;
  font-size: 16px !important;
  letter-spacing: 1px;
  border-width: 2px;
  transition: all 0.3s ease;
}
.back-btn:hover {
  background: rgba(112, 156, 52, 0.06) !important;
  transform: translateY(-2px);
}

/* ── Success Overlay ────────────────────────── */
.success-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 24px;
}
.success-content {
  text-align: center;
}
.success-icon-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #EDF3E2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: pop-in 0.4s ease;
}

/* ── Step Slide Transitions ────────────────────────── */
.step-slide-left-enter-active,
.step-slide-left-leave-active,
.step-slide-right-enter-active,
.step-slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.step-slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.step-slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.step-slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.step-slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* ── Inner Transitions ────────────────────────── */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.25s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-12px);
  max-height: 0;
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 300px;
}
.slide-fade-leave-from {
  opacity: 1;
  max-height: 300px;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
  max-height: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ── Responsive adjustments ────────────────── */
@media (max-width: 600px) {
  .section-block {
    padding: 20px 16px;
  }
  .step-header {
    padding: 20px 16px 8px;
  }
  .submit-section {
    padding: 16px 16px 24px;
  }
  .section-divider {
    padding: 0 16px;
  }
  .step-pill {
    padding: 8px 14px;
    gap: 6px;
  }
  .pill-label {
    font-size: 11px;
  }
  .step-connector {
    width: 24px;
  }
  .d-flex.ga-3 {
    flex-direction: column;
  }
  .back-btn {
    min-width: 100% !important;
  }
}

/* ── Fare Card ────────────────────────── */
.fare-card {
  background: linear-gradient(135deg, #f6fff0 0%, #eaf5e0 100%);
  border: 1.5px solid rgba(112, 156, 52, 0.3);
  border-radius: 14px;
  padding: 12px 14px;
  min-height: 86px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  animation: fareSlideIn 0.35s ease-out;
}

@keyframes fareSlideIn {
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.fare-card-empty {
  background: #fafafa;
  border-color: #e0e0e0;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.fare-card-header {
  display: flex;
  align-items: center;
}

.fare-label {
  font-size: 11px;
  font-weight: 600;
  color: #558b2f;
  letter-spacing: 0.3px;
}

.fare-card-body {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.fare-old {
  font-size: 13px;
  color: #9e9e9e;
  text-decoration: line-through;
  font-weight: 500;
}

.fare-new {
  font-size: 22px;
  font-weight: 800;
  color: #33691e;
  letter-spacing: -0.5px;
  line-height: 1;
}

.fare-card-footer {
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #757575;
}
</style>
