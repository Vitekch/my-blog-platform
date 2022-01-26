import i18n from '@/plugins/i18n';
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
      required: (v: string) => !!v || i18n.t('ERROR_VALID_REQ'),
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
      } catch (e: any) {
        this.$store.commit('setMessageText', e.message);
        this.$store.commit('setMessageVis', true);
        this.$store.commit('setMessageType', 'error');
      } finally {
        this.loading = false;
      }
    },
  },
});
