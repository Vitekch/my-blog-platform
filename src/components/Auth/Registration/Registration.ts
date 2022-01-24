import Vue from 'vue';

export default Vue.extend({
  name: 'Registration',
  data: () => ({
    isPasswordHide: true,
    username: '',
    password: '',
    confirmPassword: '',
    rules: {
      required: (v: string) => !!v || 'Field is required!',
      length: (v: string) => v?.length > 7 || 'Minimal password length is 8 characters!',
    },
  }),
  methods: {
    switchPasswordHide() {
      this.isPasswordHide = !this.isPasswordHide;
    },
    comparePasswords(v: string) {
      return this.password === v || 'Passwords must be equal!';
    },
  },
});
