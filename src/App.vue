<template>
  <v-app>
    <Header />
    <Nav />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
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
  created() {
    this.$store.commit('setUser');
  },
  data: () => ({
    nav: false,
  }),
});
</script>

<style lang="scss">
  :root{
    --accent: #00796B;
    --accent-light: #80CBC4;
  }
  :root.theme--dark{
    --accent: #00897B;
  }
  .filtered-img{
    filter: blur(1px);
    transform: scale(1.2);
  }
  a{
    color: var(--accent) !important;
  }
</style>
