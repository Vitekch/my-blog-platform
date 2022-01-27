import Vue from 'vue';
import Tag from './Tag/index.vue';

export default Vue.extend({
  name: 'BlogPost',
  components: { Tag },
  props: ['user', 'date', 'content'],
  data: () => ({
    isActive: true,
  }),
});
