<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-layout class="my-1 pa-0" justify-center align-center>
            <v-btn v-on="on" :disabled="script.status === 'Running'"
              class="me-1 my-0" color="primary" text x-small>
              <v-icon left>mdi-attachment</v-icon>View attachments
            </v-btn>
          </v-layout>
        </template>
        <v-card>

            <v-toolbar tile dense dark color="primary">
                <v-toolbar-title
                    class="ml-5">
                    [{{ script.uid }}] - {{ script.script }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>

            <v-container>
                <v-card-title>
                    <v-icon class="mr-5" color="primary">mdi-script-text-outline</v-icon>
                    Logs
                </v-card-title>
                <v-layout class="ml-5">
                    <v-container class="ma-0 pa-1"
                    v-if="script.logs !== undefined">
                        <v-sheet v-for="(log, index) in script.logs" :key="log" color="#FBE5E1">
                            <code>
                                <kbd class="ma-0 px-1 py-0">{{ index+1 }}</kbd> {{ log }}
                            </code>
                        </v-sheet>
                    </v-container>
                    <v-card-text v-else>
                        No logs attached to this script run (and this is not ok in any case)!
                    </v-card-text>
                </v-layout>
                <v-divider class="mt-5" />
                <v-card-title>
                    <v-icon class="mr-5" color="primary">mdi-file-chart</v-icon>
                    Reports
                </v-card-title>
                <v-container fluid>
                    <v-data-iterator
                        hide-default-footer
                        v-if="script.reports !== undefined"
                        :items="script.reports">
                        <template v-slot:default="props">
                        <v-row>
                        <v-col
                            v-for="(item, index) in props.items"
                            :key="index"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="3"
                        >
                            <v-card raised class="pa-0 ma-0"
                            @click="downloadReport(item.path)">
                                <v-layout align-center>
                                    <v-icon
                                    v-if="getReportFormatTag(item.name).includes('xls')"
                                    color="green">
                                        mdi-microsoft-excel
                                    </v-icon>
                                    <v-icon
                                    v-else-if="getReportFormatTag(item.name).includes('doc')"
                                    color="indigo">
                                        mdi-microsoft-word
                                    </v-icon>
                                    <v-icon
                                    color="yellow"
                                    v-else>mdi-file-document</v-icon>
                                    <v-divider vertical class="mx-1"/>
                                    <span class="subtitle-1 py-0 ma-0">
                                        {{ item.name }}
                                    </span>
                                    <v-spacer />
                                    <v-icon>mdi-file-download-outline</v-icon>
                                </v-layout>
                            </v-card>
                        </v-col>
                        </v-row>
                    </template>
                    </v-data-iterator>
                    <v-card-text v-else>
                        No reports attached to this script run.
                    </v-card-text>
                </v-container>
                <v-divider class="mt-5" />
                <v-card-title>
                    <v-icon class="mr-5" color="primary">mdi-cellphone-screenshot</v-icon>
                    Screenshots
                </v-card-title>
                <v-container fluid>
                    <v-row v-if="script.screenshots !== undefined">
                        <v-col
                        v-for="(screenshot, index) in script.screenshots"
                        :key="index"
                        class="d-flex child-flex"
                        cols="2"
                        >
                        <v-card flat tile class="d-flex">
                            <v-overlay :value="overlay" opacity="0.3">
                                <v-layout>
                                    <v-img
                                    v-click-outside="clickOutsideOverlay"
                                    :src="currentScreenshot"
                                    contain
                                    max-width="1600" max-height="800"/>
                                    <v-btn
                                        icon
                                        right
                                        bottom
                                        large
                                        @click="overlay = false"
                                    >
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-layout>
                            </v-overlay>
                            <v-img
                                :src="screenshot"
                                aspect-ratio="1"
                                class="grey lighten-2"
                                @click="viewScreenshot(screenshot)"
                            >
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                <v-progress-circular indeterminate
                                color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                            </v-img>
                        </v-card>
                        </v-col>
                    </v-row>
                    <v-card-text v-else>
                    No screenshots attached to this script run.
                    </v-card-text>
                </v-container>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
  props: {
    script: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    overlay: false,
    currentScreenshot: '',
  }),
  methods: {
    downloadReport(path) {
      window.open(path);
    },
    clickOutsideOverlay() {
      this.overlay = false;
    },
    viewScreenshot(selected) {
      this.overlay = true;
      this.currentScreenshot = selected;
    },
    getReportFormatTag(name) {
      return name.split('.')[1];
    },
  },
};
</script>
