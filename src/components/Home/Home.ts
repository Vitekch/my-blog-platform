import Vue from 'vue';
import UserHome from './UserHome/index.vue';

export default Vue.extend({
  name: 'Home',
  components: { UserHome },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
});
