<template>
  <v-layout justify-center>
    <v-row class="mx-5">
      <v-col v-for="card in projects" :key="card.uid"
      cols="12" lg="2"
      >
        <AutCards :project="card"/>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { scripts, projects } from '../main'; // eslint-disable-line import/no-cycle
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
    };
  },
};
</script>
