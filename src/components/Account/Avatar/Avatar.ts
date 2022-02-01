import Vue from 'vue';

export default Vue.extend({
  name: 'MyAvatar',
  data: () => ({
    avatarUrl: '',
  }),
  async created() {
    this.avatarUrl = await this.$store.dispatch('getAvatar');
  },
});
