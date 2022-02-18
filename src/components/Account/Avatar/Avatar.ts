import Vue from 'vue';

export default Vue.extend({
  name: 'MyAvatar',
  props: ['avatarUrl'],
  data: () => ({
    loading: false,
  }),
});
