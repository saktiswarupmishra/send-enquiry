import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import prisma from './db.js'

const app = new Hono()

app.use('/*', cors())

app.post('/api/enquiries', async (c) => {
  try {
    const body = await c.req.json()
    const enquiry = await prisma.enquiry.create({
      data: {
        serviceType: body.serviceType || '',
        destination: body.destination || '',
        tripType: body.tripType || '',
        vehicleType: body.vehicleType || '',
        vehicleName: body.vehicleName || '',
        pickupPoint: body.pickupPoint || '',
        dropPoint: body.dropPoint || '',
        stops: typeof body.stops === 'string' ? body.stops : JSON.stringify(body.stops || []),
        travelDate: body.travelDate || '',
        travelTime: body.travelTime || '',
        passengers: body.passengers ? parseInt(body.passengers) : null,
        flightNumber: body.flightNumber || '',
        airportName: body.airportName || '',
        fullName: body.fullName || '',
        phone: body.phone || '',
        email: body.email || '',
        notes: body.notes || ''
      }
    })
    return c.json({ success: true, data: enquiry })
  } catch (error) {
    console.error('Error inserting into DB:', error)
    return c.json({ success: false, error: 'Database error' }, 500)
  }
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
