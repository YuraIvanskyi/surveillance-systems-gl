<template>
  <v-layout justify-center class="ma-0 pa-2">
    <v-row>
      <v-col cols="12" lg="6" sm="6" md="12" xs="12" xl="4" class="ma-0 py-0">
        <projects-admin-card/>
      </v-col>
      <v-col cols="12" lg="6" sm="6" md="12" xs="12" xl="4" class="ma-0 py-0">
        <services-admin-card/>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import ServicesAdminCard from '../components/services-admin-card.vue';
import ProjectsAdminCard from '../components/projects-admin-card.vue';

export default {
  components: {
    ProjectsAdminCard,
    ServicesAdminCard,
  },
  data: () => ({
    ptemplate: {
      name: 'Test Project',
      tag: 'test',
    },
    stemplate: {
      name: 'Service 1',
      project: 'test',
      platform: 'Windows',
      rythm: '30m',
    },
  }),
};
</script>
