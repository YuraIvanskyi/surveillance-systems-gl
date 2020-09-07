import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

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

export const projects = [];
export const scripts = [];
export const roles = [];

const database = firebase.database();
const scriptsDB = database.ref('scripts/');
const projectsDB = database.ref('projects/');
// const storageRef = firebase.storage().ref();

scriptsDB.on('child_added', (snapshot) => {
  const data = snapshot.val();
  scripts.push(data);
});
scriptsDB.on('child_changed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].uid === data.uid) {
      scripts.splice(i, 1);
      i -= 1;
    }
  }
  scripts.push(data);
});
scriptsDB.on('child_removed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < scripts.length; i += 1) {
    if (scripts[i].uid === data.uid) {
      scripts.splice(i, 1);
      i -= 1;
    }
  }
});

projectsDB.on('child_added', (snapshot) => {
  const data = snapshot.val();
  projects.push(data);
});
projectsDB.on('child_changed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].uid === data.uid) {
      projects.splice(i, 1);
      i -= 1;
    }
  }
  projects.push(data);
});
projectsDB.on('child_removed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].uid === data.uid) {
      projects.splice(i, 1);
      i -= 1;
    }
  }
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
