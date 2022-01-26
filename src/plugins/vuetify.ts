import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import ru from 'vuetify/lib/locale/ru';
import en from 'vuetify/lib/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: false },
  lang: {
    locales: { ru, en },
    current: 'en',
  },
});
