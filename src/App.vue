<template>
  <v-app id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/Layout/AppNavbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
