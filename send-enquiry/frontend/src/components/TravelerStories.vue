<template>
  <div class="mb-12">
    <div class="text-center mb-8">
      <h2 class="text-h4 font-weight-black text-grey-darken-4 mb-2">Traveler Stories</h2>
      <p class="text-subtitle-1 text-grey-darken-1 mb-0">Every trip has a story, read them here.</p>
    </div>

    <v-row>
      <v-col cols="12" md="4" v-for="i in 3" :key="i">
        <v-card class="rounded-xl pa-6 elevation-1 bg-white h-100 d-flex flex-column custom-border">
          <div class="mb-4">
             <v-icon color="#FF8F00" size="18" class="mr-1">mdi-star</v-icon>
             <v-icon color="#FF8F00" size="18" class="mr-1">mdi-star</v-icon>
             <v-icon color="#FF8F00" size="18" class="mr-1">mdi-star</v-icon>
             <v-icon color="#FF8F00" size="18" class="mr-1">mdi-star</v-icon>
             <v-icon color="#FF8F00" size="18">mdi-star</v-icon>
          </div>
          
          <p class="text-body-1 font-style-italic text-grey-darken-2 mb-6 flex-grow-1" style="line-height: 1.6;">
            "The easiest booking experience I've ever had. The sleeper bus from Delhi was super clean and arrived on time!"
          </p>

          <div class="d-flex align-center">
             <v-avatar size="40" class="mr-3">
               <v-img :src="`https://i.pravatar.cc/150?img=${i+10}`" alt="Reviewer Avatar"></v-img>
             </v-avatar>
             <div>
               <p class="font-weight-black text-subtitle-2 mb-0" style="line-height: 1;">Ankit Sharma</p>
               <p class="text-caption text-grey-darken-1 mb-0" style="font-size: 10px !important;">Verified on Google</p>
             </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-border {
  border: 1px solid #f0f0f0;
}
.font-style-italic {
  font-style: italic;
}
</style>
