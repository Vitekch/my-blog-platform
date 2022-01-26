<template>
  <v-app>
    <Header />
    <Nav />
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <Message />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Layout/Header/index.vue';
import Footer from './components/Layout/Footer/index.vue';
import Message from './components/Layout/Message/index.vue';
import Nav from './components/Layout/Nav/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Nav, Footer, Message,
  },
  created() {
    this.$store.commit('setUser');
    this.$i18n.locale = localStorage.getItem('lang') || 'en';
  },
  data: () => ({
    nav: false,
  }),
});
</script>

<style lang="scss">
  :root{
    --accent-light: #80CBC4;
    --scrollbar: #DFDFDF;
    --scrollbar-thumb: #7c7c7c;
    --blog-post-bg: rgba(0, 0, 0, .05);
  }
  :root.dark{
    --scrollbar: #202020;
    --scrollbar-thumb: #4d4d4d;
    --blog-post-bg: rgba(255, 255, 255, .05);
  }
  .filtered-img{
    filter: blur(1px);
    transform: scale(1.2);
  }
  a{
    color: var(--v-primary-base) !important;
  }
  ::-webkit-scrollbar{
    width: 10px;
    height: 10px;
    background-color: var(--scrollbar);
  }
  ::-webkit-scrollbar-thumb{
    border: 3px solid var(--scrollbar);
    border-radius: 5px;
    background-color: var(--scrollbar-thumb);
  }
</style>
