<template>
  <v-layout justify-center>
    <v-row class="mx-5">
      <v-col v-for="card in projects" :key="card.uid"
      cols="12" lg="3" sm="6" md="4" xs="12" xl="2"
      >
        <aut-cards
        :project="card"
        :stats="{
          all:getGeneralServicesAmount(card.tag),
          passed:getPassedServicesAmount(card.tag),
          failed:getFailedServicesAmount(card.tag),
          running:getRunningServicesAmount(card.tag),
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
    getGeneralServicesAmount(project) {
      return this.services.filter((item) => item.project === project).length;
    },
    getPassedServicesAmount(project) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Passed').length;
    },
    getFailedServicesAmount(project) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Failed').length;
    },
    getRunningServicesAmount(project) {
      return this.services.filter((item) => item.project === project
      && item.status === 'Running').length;
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
