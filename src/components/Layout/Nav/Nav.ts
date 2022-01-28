import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',
  methods: {
    account() {
      this.$router.push('/account/me');
    },
    news() {
      this.$router.push('/');
    },
  },
});
