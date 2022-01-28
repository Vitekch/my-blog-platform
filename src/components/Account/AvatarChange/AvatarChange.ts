import Vue from 'vue';

export default Vue.extend({
  name: 'AvatarChange',
  data: () => ({
    isHovered: false,
    file: null,
    imageName: '',
    imageUrl: '',
    imageFile: '',

  }),
  //TODO: Рефактор
  methods: {
    selectFile(e) {
      if (this.file !== undefined) {
        this.imageName = this.file.name;
        const fr = new FileReader();
        fr.readAsDataURL(this.file);
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result;
          // eslint-disable-next-line prefer-destructuring
        });
      } else {
        this.imageName = '';
        this.imageFile = '';
        this.imageUrl = '';
      }
    },
  },
});
