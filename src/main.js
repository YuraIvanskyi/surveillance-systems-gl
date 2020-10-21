import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import config from '../firebase-config';

const firebaseConfig = config;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projects = [];
export const scripts = [];
export const services = [];
export const profiles = [];

const database = firebase.database();
const scriptsDB = database.ref('scripts/');
const servicesDB = database.ref('services/');
const projectsDB = database.ref('projects/');
const profilesDB = database.ref('profiles/');
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

servicesDB.on('child_added', (snapshot) => {
  const data = snapshot.val();
  services.push(data);
});
servicesDB.on('child_changed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < services.length; i += 1) {
    if (services[i].uid === data.uid) {
      services.splice(i, 1);
      i -= 1;
    }
  }
  services.push(data);
});
servicesDB.on('child_removed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < services.length; i += 1) {
    if (services[i].uid === data.uid) {
      services.splice(i, 1);
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

profilesDB.on('child_added', (snapshot) => {
  const data = snapshot.val();
  profiles.push(data);
});
profilesDB.on('child_changed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < profiles.length; i += 1) {
    if (profiles[i].uid === data.uid) {
      profiles.splice(i, 1);
      i -= 1;
    }
  }
  profiles.push(data);
});
profilesDB.on('child_removed', (snapshot) => {
  const data = snapshot.val();
  for (let i = 0; i < profiles.length; i += 1) {
    if (profiles[i].uid === data.uid) {
      profiles.splice(i, 1);
      i -= 1;
    }
  }
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
