<template>
  <v-app id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from './components/Layout/AppNavbar';
import Library from './assets/library-old.json';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    libraries: Library
  }),
  created() {
    this.$store.dispatch('setJsonLibrary', this.libraries.map((item) => {
      return {
        desc: item.data.general.description_html.replace(/<\/?[^>]+(>|$)/g, ""),
        ...item.data.general
      }
    }));
  }
}
</script>
