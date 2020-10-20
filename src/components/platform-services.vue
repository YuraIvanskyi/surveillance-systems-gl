<template>
<v-card outlined class="ma-1 mb-4">
    <v-data-table
      :headers="headers"
      :items="filteredServices"
      dense
      mobile-breakpoint='1080'
      item-key="uid"
      sort-by="last"
      :sort-desc="true"
      hide-default-footer
      no-data-text="No service tests for current platform/project connected."
    >
      <!-- table rows slot redefinitions -->
      <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusChipColor(item.status)" small dark>
            <v-icon v-if="item.status === 'Passed'" left small>mdi-progress-check</v-icon>
            <v-icon v-else-if="item.status === 'Failed'" left small>mdi-progress-close</v-icon>
            <v-icon v-else left small>mdi-progress-wrench</v-icon>
            <span>{{ item.status }}</span>
          </v-chip>
      </template>

      <template v-slot:[`item.last`]="{ item }">
          <span v-if="item.last">{{ new Date(item.last).toLocaleString('uk-UA') }}</span>
          <span v-else>processing...</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-badge
          overlap
          color="error"
          dot
          bordered
          v-if="item.status === 'Failed'"
        >
            <v-btn x-small text :to="$route.path + '/' + item.platform + '/' + item.name">
              <v-icon small class="mr-1">mdi-tray-full</v-icon>
              All Tests &amp; Details
            </v-btn>
        </v-badge>
        <v-btn v-else x-small text :to="$route.path + '/' + item.platform + '/' + item.name">
              <v-icon small class="mr-1">mdi-tray-full</v-icon>
              All Tests &amp; Details
            </v-btn>
      </template>

      <!-- table top bar slot redefinition -->

      <template v-slot:top>
        <v-toolbar flat dense>
          <v-toolbar-title>
              <v-layout>
              <v-icon x-large v-if="platform === 'IOS'">mdi-apple</v-icon>
              <v-icon x-large v-else-if="platform === 'Android'">mdi-android</v-icon>
              <v-icon x-large v-else-if="platform === 'Windows'">mdi-microsoft-windows</v-icon>
              <v-icon x-large v-else>mdi-monitor-cellphone-star</v-icon>
              <v-spacer/>
              <v-card-subtitle>Connected {{ platform }} Services</v-card-subtitle>
              </v-layout>
          </v-toolbar-title>
        </v-toolbar>
      </template>

    </v-data-table>
  </v-card>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      headers: [
        {
          text: 'Service', align: 'center', sortable: false, value: 'name',
        },
        {
          text: 'Status', align: 'center', sortable: false, value: 'status',
        },
        {
          text: 'Last Test', align: 'center', sortable: false, value: 'last',
        },
        {
          text: 'Test Rythm', align: 'center', sortable: false, value: 'rythm',
        },
        {
          text: 'Details', align: 'center', sortable: false, value: 'actions',
        },
      ],
    };
  },
  methods: {
    getStatusChipColor(status) {
      switch (status) {
        case 'Passed':
          return 'green';
        case 'Failed':
          return 'red';
        case 'Running':
          return 'blue';
        default:
          return 'grey';
      }
    },
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredServices() {
      return this.services.filter((item) => (item.platform === this.platform
      && item.project === this.$route.params.tag));
    },
  },
};
</script>
