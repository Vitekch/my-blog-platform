import Vue from 'vue';

export default Vue.extend({
  name: 'PostAdd',
  data: () => ({
    isHovered: false,
    title: '',
    content: '',
    tags: '',
  }),
  methods: {
    addPost() {
      const tags = (this.tags.split(',')).map((el) => el.trim());
      const data = {
        title: this.title,
        content: this.content,
        tags,
      };
      console.log('ok');
      this.$store.dispatch('addPost', data);
    },
  },
});
