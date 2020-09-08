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
                    <v-container class="ma-0 pa-1">
                        <v-sheet v-for="(log, index) in script.logs" :key="log" color="#FBE5E1">
                            <code>
                                <kbd class="ma-0 px-1 py-0">{{ index+1 }}</kbd> {{ log }}
                            </code>
                        </v-sheet>
                    </v-container>
                </v-layout>
                <v-divider class="mt-5" />
                <v-card-title>
                    <v-icon class="mr-5" color="primary">mdi-file-chart</v-icon>
                    Reports
                </v-card-title>
                <v-container fluid>
                    <v-data-iterator
                        hide-default-footer
                        :items="script.reports">
                        <template v-slot:default="props">
                        <v-row>
                        <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            cols="12"
                            sm="12"
                            md="6"
                            lg="2"
                        >
                            <v-card raised class="pa-0 ma-0"
                            :img="getReportBackImg(item.name)">
                            <v-card-title class="py-0 ma-0">
                                {{ item.name }}
                            <v-spacer />
                            <v-btn icon bottom right>
                                <v-icon>mdi-download</v-icon>
                            </v-btn>
                            </v-card-title>
                            </v-card>
                        </v-col>
                        </v-row>
                    </template>
                    </v-data-iterator>
                </v-container>
                <v-divider class="mt-5" />
                <v-card-title>
                    <v-icon class="mr-5" color="primary">mdi-cellphone-screenshot</v-icon>
                    Screenshots
                </v-card-title>
                <v-container fluid>
                    <v-row>
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
                                    :src="currentScreenshot"
                                    :lazy-src="`https://icon-library.com/images/screenshot-icon/screenshot-icon-0.jpg`"
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
                                :lazy-src="`https://icon-library.com/images/screenshot-icon/screenshot-icon-0.jpg`"
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
    viewScreenshot(selected) {
      this.overlay = true;
      this.currentScreenshot = selected;
    },
    getReportBackImg(name) {
      const format = name.split('.')[1];
      if (format === 'xlsx') {
        return 'https://www.ryadel.com/wp-content/uploads/2019/03/excel-logo-xls-xlsx-ms-microsoft-348x215.jpg';
      }
      if (format === 'doc') {
        return 'https://assets.cdnpandadoc.com/app/uploads/sites/3/You-can-now-use-an-electronic-signature-in-a-Google-Doc1.png';
      }

      return 'https://www.ksi-usa.com/files/2020/01/file-2-resized.jpg';
    },
  },
};
</script>
