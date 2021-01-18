<template>
  <v-layout justify-center>
    <v-row class="mx-5">
      <v-col v-for="card in projects" :key="card.uid"
      cols="12" lg="3" sm="6" md="4" xs="12" xl="2"
      >
        <aut-cards
        :project="card"
        :stats="{
          passed_android:getPassedServicesAmount(card.tag, 'Android'),
          passed_ios:getPassedServicesAmount(card.tag, 'IOS'),
          passed_win:getPassedServicesAmount(card.tag, 'Windows'),
          failed_android:getFailedServicesAmount(card.tag, 'Android'),
          failed_ios:getFailedServicesAmount(card.tag, 'IOS'),
          failed_win:getFailedServicesAmount(card.tag, 'Windows'),
          running_android:getRunningServicesAmount(card.tag, 'Android'),
          running_ios:getRunningServicesAmount(card.tag, 'IOS'),
          running_win:getRunningServicesAmount(card.tag, 'Windows'),
          last:getLastServiceTest(card.tag),
        }"
        />

      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { format } from 'timeago.js';
import { scripts, projects, services } from '../main'; // eslint-disable-line import/no-cycle
import AutCards from '../components/aut-card.vue';

export default {
  name: 'Home',
  components: {
    AutCards,
  },
  data() {
    return {
      scripts,
      projects,
      services,
    };
  },
  methods: {
    getPassedServicesAmount(project, platform) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Passed' && item.platform === platform).length;
    },
    getFailedServicesAmount(project, platform) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Failed' && item.platform === platform).length;
    },
    getRunningServicesAmount(project, platform) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Running' && item.platform === platform).length;
    },
    getLastServiceTest(project) {
      const all = this.services.filter((item) => item.project === project);
      const allSorted = all.sort((a, b) => new Date(a.last) - new Date(b.last));
      const last = allSorted[allSorted.length - 1];
      return last === undefined ? '-' : format(new Date(last.last));
    },
  },
};
</script>
