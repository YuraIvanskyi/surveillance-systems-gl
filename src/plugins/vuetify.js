import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000',
        secondary: '#ccc',
        accent: '#FFF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#000',
        secondary: '#ccc',
        accent: '#FFF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  breakpoint: {
    scrollBarWidth: 16,
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
});
