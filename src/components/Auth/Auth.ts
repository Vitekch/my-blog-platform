import Vue from 'vue';
import Login from './Login/index.vue';
import Registration from './Registration/index.vue';

export default Vue.extend({
  filters: {
    camelCaseSplit: (val: string) => (val.replace(/\B[A-Z]/g, ' $&') || ''),
  },
  name: 'Auth',
  components: { Login, Registration },
  props: ['component'],
  created() {
    const comps = ['Login', 'Registration'];
    if (!(comps.indexOf(this.component) + 1)) {
      this.$router.push('/auth/Login');
    }
  },
  computed: {
    title() {
      return this.$t(this.component.toUpperCase()).toString();
    },
  },
});
