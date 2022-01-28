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
      document.documentElement.className = this.$vuetify.theme.dark ? 'dark' : '';
    },
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', this.$i18n.locale);
    },
    setNavVis() {
      this.$store.commit('setNavVisibility');
    },
    login() {
      this.$router.push('/auth/Login');
    },
    account() {
      this.$router.push('/account/me');
    },
    news() {
      this.$router.push('/');
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/auth/Login');
    },
  },
});
