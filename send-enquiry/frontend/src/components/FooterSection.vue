<template>
  <div class="mt-16">
    <!-- Quick Travel Links -->
    <v-container>
      <div class="text-center mb-8">
        <p class="text-subtitle-1 font-weight-bold text-uppercase text-grey-darken-2 mb-1" style="letter-spacing: 1px;">QUICK TRAVEL LINKS</p>
        <h2 class="text-h3 font-weight-bold" style="color: #6A8D3F;">Explore Destination</h2>
      </div>

      <v-row class="mb-10">
        <!-- Pilgrimage Tours -->
        <v-col cols="12" sm="6" md="3">
          <v-btn variant="outlined" color="#6A8D3F" class="rounded-pill font-weight-bold bg-white mb-6 w-100" style="text-transform: none;">
            Pilgrimage Tours
          </v-btn>
          <ul class="list-unstyled custom-list pl-2">
            <li v-for="link in pilgrimageLinks" :key="link">
               <span class="dot mr-2"></span> {{ link }}
            </li>
          </ul>
        </v-col>
        <!-- Hill Station Tours -->
        <v-col cols="12" sm="6" md="3">
          <v-btn variant="outlined" color="#6A8D3F" class="rounded-pill font-weight-bold bg-white mb-6 w-100" style="text-transform: none;">
            Hill Station Tours
          </v-btn>
          <ul class="list-unstyled custom-list pl-2">
            <li v-for="link in hillStationLinks" :key="link">
               <span class="dot mr-2"></span> {{ link }}
            </li>
          </ul>
        </v-col>
        <!-- Rajasthan Tours -->
        <v-col cols="12" sm="6" md="3">
          <v-btn variant="outlined" color="#6A8D3F" class="rounded-pill font-weight-bold bg-white mb-6 w-100" style="text-transform: none;">
            Rajasthan Tours
          </v-btn>
          <ul class="list-unstyled custom-list pl-2">
            <li v-for="link in rajasthanLinks" :key="link">
               <span class="dot mr-2"></span> {{ link }}
            </li>
          </ul>
        </v-col>
        <!-- Corporate & Event Rentals -->
        <v-col cols="12" sm="6" md="3">
          <v-btn variant="outlined" color="#6A8D3F" class="rounded-pill font-weight-bold bg-white mb-6 w-100" style="text-transform: none;">
            Corporate & Event Rentals
          </v-btn>
          <ul class="list-unstyled custom-list pl-2">
            <li v-for="link in corporateLinks" :key="link">
               <span class="dot mr-2"></span> {{ link }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>

    <!-- Skyline Graphic -->
    <div class="skyline-container">
      <div class="skyline text-center opacity-40">
        <!-- Using FontAwesome or text based graphic for skyline, but keeping generic shapes via an SVG placeholder or image -->
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Delhi_Skyline.svg" height="150" contain class="mb-n2"></v-img>
      </div>
    </div>

    <!-- Dark Footer -->
    <div class="bg-grey-darken-4 pt-12 pb-6 text-white">
      <v-container>
        <v-row class="mb-8">
          <!-- Logo & Description -->
          <v-col cols="12" md="3" class="pr-md-8">
            <h2 class="text-h4 font-weight-black mb-4">ANT <br><span class="text-subtitle-2 font-weight-medium" style="letter-spacing: 6px;">TRAVELS</span></h2>
            <p class="text-body-2 text-grey-lighten-1 mb-6" style="line-height: 1.6;">
              We are one of the oldest transport service providers based in ANT Travels and have been in this business for over two decades.
            </p>
            <div class="d-flex" style="gap: 12px;">
              <v-btn icon size="small" variant="outlined" color="grey-lighten-1"><v-icon>mdi-instagram</v-icon></v-btn>
              <v-btn icon size="small" variant="outlined" color="grey-lighten-1"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn icon size="small" variant="outlined" color="grey-lighten-1"><v-icon>mdi-youtube</v-icon></v-btn>
              <v-btn icon size="small" variant="outlined" color="grey-lighten-1"><v-icon>mdi-twitter</v-icon></v-btn>
            </div>
          </v-col>

          <!-- Links Columns -->
          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="6" sm="3">
                <h4 class="font-weight-bold mb-4">Company</h4>
                <ul class="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Online Payment</a></li>
                  <li><a href="#">Feedback</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Travel Tips</a></li>
                  <li><a href="#">Site Map</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="font-weight-bold mb-4">Our Services</h4>
                <ul class="footer-links">
                  <li><a href="#">Rent Bus</a></li>
                  <li><a href="#">Rent Car</a></li>
                  <li><a href="#">Rent Traveller / Minivan</a></li>
                  <li><a href="#">Book Bus Ticket</a></li>
                  <li><a href="#">Popular Destination</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="font-weight-bold mb-4">Book a Car</h4>
                <ul class="footer-links">
                  <li><a href="#">Swift Dzire Car Hire</a></li>
                  <li><a href="#">Toyota Innova Car Hire</a></li>
                  <li><a href="#">Innova Crysta Car Hire</a></li>
                  <li><a href="#">Honda City Car Hire</a></li>
                  <li><a href="#">Toyota Fortuner Car Hire</a></li>
                  <li><a href="#">Ertiga Car Hire</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="font-weight-bold mb-4">Coach Hire</h4>
                <ul class="footer-links">
                  <li><a href="#">Mini Bus Hire</a></li>
                  <li><a href="#">Bus Hire for Local City Tour</a></li>
                  <li><a href="#">Bus Hire for Airport Transfer</a></li>
                  <li><a href="#">Bus Hire for Outstation</a></li>
                  <li><a href="#">Bus Hire for Wedding</a></li>
                  <li><a href="#">Bus Hire for Chardham Yatra</a></li>
                  <li><a href="#">Bus Hire for Corporate Travel</a></li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider color="grey-darken-2" class="mb-4"></v-divider>

        <div class="d-flex flex-column flex-md-row justify-space-between align-center px-2">
          <p class="text-caption text-grey-lighten-1 mb-2 mb-md-0">© 2024 ANT TRAVELS PRIVATE LTD. ALL RIGHTS RESERVED.</p>
          <div class="d-flex text-caption text-grey-lighten-1" style="gap: 16px;">
            <a href="#" class="text-decoration-none text-white">PRIVACY POLICY</a>
            <a href="#" class="text-decoration-none text-white">TERMS & CONDITIONS</a>
            <a href="#" class="text-decoration-none text-white">REFUND POLICY & CANCELLATION</a>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pilgrimageLinks = ref([
  'Delhi to Ayodhya Bus Rental', 'Delhi to Varanasi Bus Rental', 'Delhi to Prayagraj Bus Rental',
  'Delhi to Ujjain Bus Rental', 'Delhi to Chitrakoot Bus Rental', 'Delhi to Khatu Shyam Bus Rental',
  'Delhi to Salasar Balaji Bus Rental', 'Delhi to Vaishno Devi Bus Rental'
])

const hillStationLinks = ref([
  'Delhi to Manali Bus Rental', 'Delhi to Shimla Bus Rental', 'Delhi to Mussoorie Bus Rental',
  'Delhi to Nainital Bus Rental', 'Delhi to Ranikhet Bus Rental', 'Delhi to Jim Corbett Bus Rental',
  'Delhi to Dehradun Bus Rental', 'Delhi to Srinagar Bus Rental'
])

const rajasthanLinks = ref([
  'Delhi to Jaipur Bus Rental', 'Delhi to Jodhpur Bus Rental', 'Delhi to Udaipur Bus Rental',
  'Delhi to Jaisalmer Bus Rental', 'Delhi to Bikaner Bus Rental', 'Delhi to Pushkar Bus Rental',
  'Delhi to Jhunjhunu Bus Rental', 'Delhi to Orchha Bus Rental'
])

const corporateLinks = ref([
  'Bus Rental for Corporate Events', 'Wedding Bus Rental Service', 'School / College Trip Bus Hire',
  'Airport / Station Transfer', 'Outstation Group Tours Bus Rental'
])
</script>

<style scoped>
.custom-list {
  list-style-type: none;
  padding-left: 0;
}
.custom-list li {
  margin-bottom: 12px;
  font-size: 13px;
  color: #424242;
  display: flex;
  align-items: center;
}
.dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #6A8D3F;
  border-radius: 50%;
}
.footer-links {
  list-style-type: none;
  padding-left: 0;
}
.footer-links li {
  margin-bottom: 12px;
}
.footer-links a {
  text-decoration: none;
  color: #BDBDBD;
  font-size: 13px;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: #FFFFFF;
}
.skyline-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
