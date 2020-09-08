<template>
<v-layout justify-center class="px-3 mt-0">
  <v-row>
    <v-col
    cols="12"
    lg="12"
    >
    <scripts-log :scripts="scripts"/>
    </v-col>
  </v-row>
</v-layout>
</template>

<script>
import ScriptsLog from '../components/scripts-log.vue';
import { scripts } from '../main'; // eslint-disable-line import/no-cycle

export default {
  name: 'Service',
  components: {
    ScriptsLog,
  },
  data() {
    return {
      scripts: scripts.filter((item) => (item.platform === this.$route.params.platform
      && item.service === this.$route.params.servicename
      && item.pname === this.$route.params.puid)),
    };
  },
};
</script>
