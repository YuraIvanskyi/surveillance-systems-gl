import Vue from 'vue';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC2sHv5z8zp4lqwt-PJtwfOfYVxYNUbKOg',
  authDomain: 'surveillance-dashboard-593c1.firebaseapp.com',
  databaseURL: 'https://surveillance-dashboard-593c1.firebaseio.com',
  projectId: 'surveillance-dashboard-593c1',
  storageBucket: 'surveillance-dashboard-593c1.appspot.com',
  messagingSenderId: '699345316472',
  appId: '1:699345316472:web:8cd05a841bd5ce2e279b8d',
  measurementId: 'G-BTDHGTDSFL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
