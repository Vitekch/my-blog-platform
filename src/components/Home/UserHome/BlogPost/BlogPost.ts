import Vue from 'vue';
import Tag from './Tag/index.vue';

export default Vue.extend({
  name: 'BlogPost',
  components: { Tag },
  props: ['user', 'date', 'content', 'title'],
  data: () => ({
    isActive: true,
  }),
  methods: {
    openImage(src: string) {
      this.$store.commit('setFullImg', src);
      this.$store.commit('setImageViewVisible', true);
    },
  },
});
