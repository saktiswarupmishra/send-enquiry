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
          <v-btn variant="text" class="rounded-pill font-weight-bold mb-6 w-100 travel-category-btn" style="text-transform: none;">
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
          <v-btn variant="text" class="rounded-pill font-weight-bold mb-6 w-100 travel-category-btn" style="text-transform: none;">
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
          <v-btn variant="text" class="rounded-pill font-weight-bold mb-6 w-100 travel-category-btn" style="text-transform: none;">
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
          <v-btn variant="text" class="rounded-pill font-weight-bold mb-6 w-100 travel-category-btn" style="text-transform: none;">
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

    <!-- Skyline Banner -->
    <div class="skyline-wrapper">
      <svg class="skyline-banner" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#sky-grad)" />
        
        <!-- Detailed Landmarks -->
        <!-- Temple Shapes Left -->
        <path d="M50 120 L50 90 L60 70 L70 90 L70 120 Z M80 120 L80 80 L95 60 L110 80 L110 120 Z" fill="#cccccc" />
        
        <!-- Lotus Temple -->
        <path d="M200 120 L160 110 Q200 60 240 110 L240 120 Z M180 110 Q200 80 220 110 Z" fill="#d5d5d5" />
        
        <!-- Taj Mahal -->
        <path d="M400 120 L400 100 L420 100 L420 120 Z M580 120 L580 100 L600 100 L600 120 Z M450 120 L450 90 L530 90 L530 120 Z M460 90 Q490 30 520 90 Z" fill="#bfbfbf" />
        
        <!-- India Gate -->
        <path d="M800 120 L800 60 L880 60 L880 120 Z M820 120 L820 80 Q840 70 860 80 L860 120 Z" fill="#b0b0b0" />
        
        <!-- Qutub Minar -->
        <path d="M1000 120 L1005 30 L1015 30 L1020 120 Z" fill="#a0a0a0" />
        
        <!-- Ground Line -->
        <rect y="115" width="1200" height="5" fill="#f0f0f0" />
      </svg>
    </div>

    <!-- Dark Footer -->
    <div class="footer-dark">
      <v-container>
        <v-row class="mb-8">
          <!-- Logo & Description -->
          <v-col cols="12" md="3" class="pr-md-8">
            <div class="ant-logo mb-4">
              <div class="ant-logo-text">ANT</div>
              <div class="ant-logo-subtitle">
                <div class="logo-lines-group">
                  <span class="logo-line-thin"></span>
                  <span class="logo-line-thin"></span>
                  <span class="logo-line-thin"></span>
                </div>
                <span class="logo-tourist">TOURIST</span>
                <div class="logo-lines-group">
                  <span class="logo-line-thin"></span>
                  <span class="logo-line-thin"></span>
                  <span class="logo-line-thin"></span>
                </div>
              </div>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-6" style="line-height: 1.7; font-size: 13px !important;">
              We  are one of the oldest Transport Service providers based in ANT Travels and have been in the business for now over ten years.
            </p>
            <div class="d-flex social-icons" style="gap: 10px;">
              <a href="#" class="social-icon instagram">
                <v-icon size="18">mdi-instagram</v-icon>
              </a>
              <a href="#" class="social-icon facebook">
                <v-icon size="18">mdi-facebook</v-icon>
              </a>
              <a href="#" class="social-icon youtube">
                <v-icon size="18">mdi-youtube</v-icon>
              </a>
              <a href="#" class="social-icon twitter">
                <v-icon size="18">mdi-close</v-icon>
              </a>
            </div>
          </v-col>

          <!-- Links Columns -->
          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="6" sm="3">
                <h4 class="footer-heading mb-4">Company</h4>
                <ul class="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Online Payment</a></li>
                  <li><a href="#">FeedBack</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Travel Tips</a></li>
                  <li><a href="#">Site Map</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="footer-heading mb-4">Our Services</h4>
                <ul class="footer-links">
                  <li><a href="#">Rent Bus</a></li>
                  <li><a href="#">Rent Car</a></li>
                  <li><a href="#">Rent Traveller / Mini Van</a></li>
                  <li><a href="#">Book Bus Ticket</a></li>
                  <li><a href="#">Popular Destination</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="footer-heading mb-4">Book a Car</h4>
                <ul class="footer-links">
                  <li><a href="#">Swift Dzire Car Hire</a></li>
                  <li><a href="#">Hyundai Aura Car Hire</a></li>
                  <li><a href="#">Innova Crysta Car Hire</a></li>
                  <li><a href="#">Honda City Car Hire</a></li>
                  <li><a href="#">Toyota Fortuner Car Hire</a></li>
                  <li><a href="#">Ertica Car Hire</a></li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3">
                <h4 class="footer-heading mb-4">Coach Hire</h4>
                <ul class="footer-links">
                  <li><a href="#">Mini Bus Hire</a></li>
                  <li><a href="#">Bus Hire for Local City Tour</a></li>
                  <li><a href="#">Bus Hire for Airport Transfer</a></li>
                  <li><a href="#">Bus Hire for Outstation</a></li>
                  <li><a href="#">Bus Hire for Wedding</a></li>
                  <li><a href="#">Bus Hire for Chardham Yatra</a></li>
                  <li><a href="#">Bus Hire for Corporate Event</a></li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider color="white" class="mb-4" style="opacity: 1; border-color: #fff;"></v-divider>

        <div class="d-flex flex-column flex-md-row justify-space-between align-center px-2 footer-bottom">
          <p class="text-caption text-grey-lighten-1 mb-2 mb-md-0 footer-copyright">© 2026 ANT TRAVEL PRIVATE LTD. ALL RIGHTS RESERVED.</p>
          <div class="d-flex text-caption footer-bottom-links" style="gap: 24px;">
            <a href="#" class="text-decoration-none text-grey-lighten-1 footer-bottom-link">PRIVACY POLICY</a>
            <a href="#" class="text-decoration-none text-grey-lighten-1 footer-bottom-link">TERMS & CONDITIONS</a>
            <a href="#" class="text-decoration-none text-grey-lighten-1 footer-bottom-link">REFUND POLICY & CANCELLATION</a>
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

/* Travel Category Buttons - merged with background */
.travel-category-btn {
  color: #6A8D3F !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 15px !important;
}


/* Skyline Banner */
.skyline-wrapper {
  background-color: #f5f5f5;
  width: 100%;
}

.skyline-banner {
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.skyline-svg {
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

/* Dark Footer */
.footer-dark {
  background-color: #4b4b4b;
  padding-top: 48px;
  padding-bottom: 24px;
  color: #fff;
  border-top: 1px solid #fff;
}

/* ANT Logo */
.ant-logo {
  display: inline-block;
}
.ant-logo-text {
  font-size: 64px;
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: 2px;
  color: #fff;
  padding: 0;
}
.ant-logo-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}
.logo-lines-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.logo-line-thin {
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-block: 1.5px;
}
.logo-tourist {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;
  white-space: nowrap;
}

/* Social Icons */
.social-icons .social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  text-decoration: none;
  border: 1px solid #fff;
}
.social-icon.instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}
.social-icon.instagram .v-icon {
  color: #fff;
}
.social-icon.facebook {
  background-color: #1877F2;
}
.social-icon.facebook .v-icon {
  color: #fff;
}
.social-icon.youtube {
  background-color: #FF0000;
}
.social-icon.youtube .v-icon {
  color: #fff;
}
.social-icon.twitter {
  background-color: #555;
  border: 1px solid #999;
}
.social-icon.twitter .v-icon {
  color: #fff;
}
.social-icon:hover {
  opacity: 0.8;
}

/* Footer Headings */
.footer-heading {
  font-weight: 700;
  font-size: 15px;
  color: #fff;
}

/* Footer Links */
.footer-links {
  list-style-type: none;
  padding-left: 0;
}
.footer-links li {
  margin-bottom: 11px;
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

/* Footer Bottom */
.footer-bottom {
  padding-top: 8px;
}
.footer-copyright {
  font-size: 11px !important;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.footer-bottom-link {
  font-size: 11px !important;
  letter-spacing: 0.5px;
  font-weight: 600;
  transition: color 0.3s;
}
.footer-bottom-link:hover {
  color: #fff !important;
}
</style>
