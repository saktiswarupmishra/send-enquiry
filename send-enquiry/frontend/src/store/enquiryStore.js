import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useEnquiryStore = defineStore('enquiry', () => {
  const form = ref({
    destination: '',
    tripType: '',
    vehicleType: '',
    vehicleName: '',
    pickupPoint: '',
    stops: [],
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  })

  const addStop = () => {
    form.value.stops.push('')
  }

  const removeStop = (index) => {
    form.value.stops.splice(index, 1)
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

  return { form, addStop, removeStop, submitEnquiry }
})
