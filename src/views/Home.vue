<template>
<v-layout justify-center>
</v-layout>
</template>

<script>
import { scripts, projects } from '../main'; // eslint-disable-line import/no-cycle

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      scripts,
      projects,
    };
  },
};
</script>
