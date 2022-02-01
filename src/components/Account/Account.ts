import Vue from 'vue';
import Avatar from './Avatar/index.vue';
import AvatarChange from './AvatarChange/index.vue';

export default Vue.extend({
  name: 'PersonalArea',
  props: ['urlUsername'],
  data: () => ({
    username: '',
    firstName: '',
    lastName: '',
  }),
  beforeRouteUpdate(from, to, next) {
    this.setData(from.params.urlUsername);
    next();
  },
  methods: {
    setData(un: string) {
      const user = localStorage.getItem('user');
      console.log(un);
      if (user) {
        const userData = JSON.parse(user);
        if (un === 'me') {
          this.username = userData.username;
          this.firstName = userData.firstName;
          this.lastName = userData.lastName;
        }
      }
    },
    showAvatarChangeDialog() {
      this.$store.commit('setAvatarChangeVisible', true);
    },
  },
  created() {
    this.setData(this.urlUsername);
  },
  components: { Avatar, AvatarChange },
});
