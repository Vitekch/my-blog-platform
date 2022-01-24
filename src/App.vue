<template>
  <v-app>
    <Header />
    <Nav />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Layout/Header/index.vue';
import Footer from './components/Layout/Footer/index.vue';
import Nav from './components/Layout/Nav/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Nav, Footer,
  },

  data: () => ({
    nav: false,
  }),
});
</script>

<style lang="scss">
  :root{
  }
  :root.theme--dark{
  }
</style>
