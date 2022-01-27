import Vue from 'vue';

export default Vue.extend({
  name: 'ImageFullView',
  props: ['img'],
  data: () => ({
    isActive: false,
  }),
});
