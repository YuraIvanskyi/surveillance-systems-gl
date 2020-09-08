<template>
<v-layout justify-center class="px-3 mt-0">
  <v-row>
    <v-col
    cols="12"
    lg="12"
    >
    <platform-services :serviceScripts="iosScripts" :platform="'IOS'"/>
    <platform-services :serviceScripts="androidScripts" :platform="'Android'"/>
    <platform-services :serviceScripts="winScripts" :platform="'Windows'"/>
    </v-col>
  </v-row>
</v-layout>
</template>

<script>
import PlatformServices from '../components/platform-services.vue';
import { scripts } from '../main'; // eslint-disable-line import/no-cycle

export default {
  name: 'Project',
  components: {
    PlatformServices,
  },
  data() {
    return {
      iosScripts: scripts.filter((item) => (item.platform === 'IOS'
      && item.pname === this.$route.params.puid)),
      androidScripts: scripts.filter((item) => (item.platform === 'Android'
      && item.pname === this.$route.params.puid)),
      winScripts: scripts.filter((item) => (item.platform === 'Windows'
      && item.pname === this.$route.params.puid)),
    };
  },
};
</script>
