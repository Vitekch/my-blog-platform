import Vue from 'vue';
import SignIn from './Login/index.vue';
import SignUp from './Registration/index.vue';

export default Vue.extend({
  filters: {
    camelCaseSplit: (val: string) => (val.replace(/\B[A-Z]/g, ' $&') || ''),
  },
  name: 'Auth',
  components: { SignIn, SignUp },
  props: ['component'],
  created() {
    const comps = ['SignIn', 'SignUp'];
  },
  data: () => ({
  }),
});
