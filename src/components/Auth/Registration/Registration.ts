import Vue from 'vue';
import { registerPayload } from '@/types/auth-types';
import i18n from '@/plugins/i18n';

export default Vue.extend({
  name: 'Registration',
  data: () => ({
    loading: false,
    isPasswordHide: true,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: 'male',
    confirmPassword: '',
    rules: {
      required: (v: string) => !!v || i18n.t('ERROR_VALID_REQ').toString(),
      length: (v: string) => v?.length > 7 || i18n.t('ERROR_VALID_PWD_LEN').toString(),
      email: (v: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || i18n.t('ERROR_VALID_EMAIL').toString();
      },
    },
    error: '',
    errorIsVisible: false,
  }),
  methods: {
    switchPasswordHide() {
      this.isPasswordHide = !this.isPasswordHide;
    },
    comparePasswords(v: string) {
      return this.password === v || 'Passwords must be equal!';
    },
    async registration() {
      this.loading = true;
      const form: any = this.$refs.regForm;
      try {
        if (form.validate()) {
          const userData: registerPayload = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            email: this.email,
          };
          this.$store.dispatch('registration', userData)
            .then(() => {
              this.$router.push('/auth/Login');
            })
            .catch((err) => { this.error = err.message; this.errorIsVisible = true; });
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
