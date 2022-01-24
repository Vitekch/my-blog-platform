import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    setNavVis() {
      this.$store.commit('setNavVisibility');
    },
  },
});
