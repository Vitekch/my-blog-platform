import { loginPayload } from '@/types/auth-types';
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  props: ['changeComp'],
  data: () => ({
    isPasswordHide: true,
    username: '',
    password: '',
    loading: false,
    rules: {
      required: (v: string) => !!v || 'Field is required!',
      length: (v: string) => v.length > 7 || 'Minimal password length is 8 characters!',
    },
  }),
  methods: {
    switchPasswordHide() {
      this.isPasswordHide = !this.isPasswordHide;
    },
    async login() {
      this.loading = true;
      const form: any = this.$refs.loginForm;
      console.log(form);
      try {
        if (form.validate()) {
          const userData: loginPayload = {
            username: this.username,
            password: this.password,
          };
          await this.$store.dispatch('login', userData);
          this.$router.push('/');
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
