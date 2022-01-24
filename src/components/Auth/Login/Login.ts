import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  props: ['changeComp'],
  data: () => ({
    isPasswordHide: true,
    username: '',
    password: '',
    rules: {
      required: (v: string) => !!v || 'Field is required!',
      length: (v: string) => v.length > 7 || 'Minimal password length is 8 characters!',
    },
  }),
  methods: {
    switchPasswordHide() {
      this.isPasswordHide = !this.isPasswordHide;
    },
    login(): boolean {
      const form: any = this.$refs.loginForm;
      console.log(form.validate());
      return false;
    },
  },
});
