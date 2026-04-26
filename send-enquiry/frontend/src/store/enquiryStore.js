import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useEnquiryStore = defineStore('enquiry', () => {
  const form = ref({
    serviceType: 'local',
    destination: '',
    tripType: '',
    vehicleType: '',
    vehicleName: '',
    pickupPoint: '',
    dropPoint: '',
    stops: [],
    travelDate: '',
    travelTime: '',
    passengers: '',
    flightNumber: '',
    airportName: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    // Custom Service Fields
    eventVenue: '',
    vehiclesNeeded: '',
    tourDestination: '',
    tourDurationDays: '',
    companyName: '',
    eventPurpose: '',
    schoolName: '',
    gradeClass: ''
  })

  const addStop = () => {
    form.value.stops.push('')
  }

  const removeStop = (index) => {
    form.value.stops.splice(index, 1)
  }

  const resetForm = () => {
    form.value = {
      serviceType: 'local',
      destination: '',
      tripType: '',
      vehicleType: '',
      vehicleName: '',
      pickupPoint: '',
      dropPoint: '',
      stops: ['', ''],
      travelDate: '',
      travelTime: '',
      passengers: '',
      flightNumber: '',
      airportName: '',
      fullName: '',
      phone: '',
      email: '',
      notes: '',
      eventVenue: '',
      vehiclesNeeded: '',
      tourDestination: '',
      tourDurationDays: '',
      companyName: '',
      eventPurpose: '',
      schoolName: '',
      gradeClass: ''
    }
  }

  const submitEnquiry = async () => {
    try {
      const payload = { ...form.value, stops: JSON.stringify(form.value.stops) }
      const response = await axios.post('http://localhost:3000/api/enquiries', payload)
      return { success: true, data: response.data }
    } catch (error) {
      console.error('Submission failed', error)
      return { success: false, error: error.message }
    }
  }

  return { form, addStop, removeStop, resetForm, submitEnquiry }
})
