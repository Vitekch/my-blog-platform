import Vue from 'vue';
import Avatar from './Avatar/index.vue';
import AvatarChange from './AvatarChange/index.vue';
import PostAdd from './PostAdd/index.vue';

export default Vue.extend({
  name: 'PersonalArea',
  props: ['urlUsername'],
  data: () => ({
    username: '',
    firstName: '',
    lastName: '',
    avatarUrl: '',
  }),
  beforeRouteUpdate(from, to, next) {
    this.setData(from.params.urlUsername);
    next();
  },
  methods: {
    async setData(un: string) {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        if (un === 'me' || un === userData.username) {
          this.username = userData.username;
          this.firstName = userData.firstName;
          this.lastName = userData.lastName;
        } else {
          const accountData = await this.$store.dispatch('getUser', un);
          if (accountData.username) {
            this.username = accountData.username;
            this.firstName = accountData.firstName;
            this.lastName = accountData.lastName;
          }
        }
        this.avatarUrl = await this.$store.dispatch('getAvatar', this.username);
      }
    },
    showAvatarChangeDialog() {
      this.$store.commit('setAvatarChangeVisible', true);
    },
    showPostAddDialog() {
      this.$store.commit('setPostAddVisible', true);
    },
    isAmI() {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        return this.urlUsername === 'me' || this.urlUsername === userData.username;
      }
      return false;
    },
  },
  mounted() {
    this.setData(this.urlUsername);
  },
  components: { Avatar, AvatarChange, PostAdd },
});
