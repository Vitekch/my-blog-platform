import Vue from 'vue';

export default Vue.extend({
  name: 'Message',
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    hideMessage() {
      this.$store.commit('setMessageVis', false);
    },
  },
});
