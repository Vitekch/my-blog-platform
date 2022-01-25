import Vue from 'vue';
import { registerPayload } from '@/types/auth-types';

export default Vue.extend({
  name: 'Registration',
  data: () => ({
    isPasswordHide: true,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: 'male',
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
    async registration() {
      const form: any = this.$refs.regForm;
      if (form.validate()) {
        const userData: registerPayload = {
          username: this.username,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
        };
        await this.$store.dispatch('registration', userData).catch((err) => console.log(err));
      }
    },
  },
});
