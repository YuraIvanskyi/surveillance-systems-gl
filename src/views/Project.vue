<template>
<v-layout justify-center class="px-3 mt-0">
  <v-row>
    <v-col
    cols="12"
    lg="12"
    >
    <platform-services :services="services" :platform="'IOS'"/>
    <platform-services :services="services" :platform="'Android'"/>
    <platform-services :services="services" :platform="'Windows'"/>
    </v-col>

  </v-row>
</v-layout>
</template>

<script>
import PlatformServices from '../components/platform-services.vue';
import { services } from '../main'; // eslint-disable-line import/no-cycle

export default {
  name: 'Project',
  components: {
    PlatformServices,
  },
  data() {
    return {
      services,
    };
  },
};
</script>
