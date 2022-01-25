import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en';
    },
    setNavVis() {
      this.$store.commit('setNavVisibility');
    },
    login() {
      this.$router.push('/auth/Login');
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/auth/Login');
    },
  },
});
