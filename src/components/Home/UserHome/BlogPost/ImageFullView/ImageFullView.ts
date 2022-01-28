import Vue from 'vue';

export default Vue.extend({
  name: 'ImageFullView',
  data: () => ({
    isHovered: false,
  }),
  computed: {
    img() {
      return this.$store.state.fullContentImg;
    },
  },
});
