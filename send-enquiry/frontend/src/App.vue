<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  background-color: #F5F5F5;
}
</style>
