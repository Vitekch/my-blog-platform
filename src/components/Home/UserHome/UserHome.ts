import Vue from 'vue';
import { postsData } from '@/sample-data';
import BlogPost from './BlogPost/index.vue';
import ImageFullView from './BlogPost/ImageFullView/index.vue';

export default Vue.extend({
  name: 'UserHome',
  components: { BlogPost, ImageFullView },
  data: () => ({
    postsData,
  }),
  methods: {
  },
});
