import Vue from 'vue';
import Login from './Login/index.vue';
import Registration from './Registration/index.vue';

export default Vue.extend({
  name: 'Auth',
  components: { Login, Registration },
  props: ['component'],
  data: () => ({
  }),
});
