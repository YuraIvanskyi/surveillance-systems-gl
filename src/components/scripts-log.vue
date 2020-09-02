<template>
<v-card outlined class="ma-1">
    <v-data-table
      :headers="headers"
      :items="scripts"
      :single-expand="true"
      :expanded.sync="expanded"
      :search="search"
      :sort-desc="true"
      sort-by="startTime"
      dense
      must-sort
      item-key="uid"
      :show-expand="false"
      :footer-props="{
        showFirstLastPage: true,
        itemsPerPageOptions: [30, 50, 100]
      }"
    >
      <!-- table rows slot redefinitions -->
      <template v-slot:[`item.status`]="{ item }">
        <v-chip :color="getStatusChipColor(item.status)"
            small dark
        >
          <v-icon v-if="item.status === 'Passed'" left small>mdi-progress-check</v-icon>
          <v-icon v-else-if="item.status === 'Failed'" left small>mdi-progress-close</v-icon>
          <v-icon v-else left small>mdi-progress-wrench</v-icon>
          <span>{{ item.status }}</span>
        </v-chip>
      </template>

      <template v-slot:[`item.endTime`]="{ item }">
          <span v-if="item.endTime">{{ new Date(item.endTime).toLocaleString('uk-UA') }}</span>
          <span v-else>processing...</span>
      </template>

      <template v-slot:[`item.startTime`]="{ item }">
          <span>{{ new Date(item.startTime).toLocaleString('uk-UA') }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
          <v-layout class="my-1 pa-0" justify-center align-center>
            <v-btn :disabled="item.status === 'Running'"
              class="me-1 my-0" color="primary" text x-small>
              <v-icon left>mdi-script-text-outline</v-icon>Logs
            </v-btn>
            <v-btn :disabled="item.status === 'Running'"
              class="me-1 my-0" color="primary" text x-small>
              <v-icon left>mdi-cellphone-screenshot</v-icon>Screenshots
            </v-btn>
            <v-btn :disabled="item.status === 'Running'"
              class="me-1 my-0" color="primary" text x-small>
              <v-icon left>mdi-file-chart</v-icon>Reports
            </v-btn>
          </v-layout>
      </template>

      <!-- table top bar slot redefinition -->

      <template v-slot:top>
        <v-toolbar flat dense>
          <v-toolbar-title>Service {x} tests</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-search"
            label="Search"
            single-line
            light
            color="primary"
            hide-details
          />
        </v-toolbar>
      </template>

      <!-- expandable row slot redefinition, might not be needed -->
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.uid }}</td>
      </template>

    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'UID', align: 'center', sortable: false, value: 'uid',
        },
        {
          text: 'Script', align: 'center', sortable: false, value: 'script',
        },
        {
          text: 'Status', align: 'center', sortable: false, value: 'status',
        },
        {
          text: 'Device', align: 'center', sortable: false, value: 'device',
        },
        {
          text: 'Initiated', align: 'center', sortable: false, value: 'startTime',
        },
        {
          text: 'Completed', align: 'center', sortable: false, value: 'endTime',
        },
        {
          text: 'Attachments', align: 'center', sortable: false, value: 'actions',
        },
      ],
      expanded: [],
      search: '',
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
    scripts: {
      type: Array,
      required: true,
    },
  },
};
</script>
