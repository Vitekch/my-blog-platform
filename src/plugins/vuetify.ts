import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import ru from 'vuetify/lib/locale/ru';
import en from 'vuetify/lib/locale/en';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.teal.darken2,
        blogPostBg: '#fafafa',
      },
      dark: {
        primary: colors.teal.darken1,
        blogPostBg: '#2d2d2d',
      },
    },
  },
  lang: {
    locales: { ru, en },
    current: 'en',
  },
});
