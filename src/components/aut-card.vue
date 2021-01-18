<template>
    <v-card
      max-width="340"
      min-width="240"
      min-height="300"
      elevation="5"
      class="pa-0 ma-0"
      :color="project.color"
      v-ripple="{ class: `${
        project.color.includes(' ') ?
        project.color.split(' ')[0] :
        project.color}--text`}"
      :to="$route.path + '/' + project.tag"
    >
      <v-container class="px-0 py-1">
        <v-layout class="grey lighten-4 font-weight-bold">
          <v-list-item-title
            align="center">
          {{ project.name }}
          </v-list-item-title>
        </v-layout>
        <v-img :src="project.img" height="140"/>
        <v-divider/>
        <v-divider/>

        <v-layout class="grey lighten-4">
          <v-container class="pt-1 pb-0 px-2 font-weight-light">
            <v-row dense>
              <v-col class="my-0 py-0">
                <v-container class="ma-0 pa-0">

                  <v-layout justify-center>
                    <v-icon large :color="project.color">mdi-apple</v-icon>
                  </v-layout>

                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="green" size="18">
                      <v-icon dark small>mdi-progress-check</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.passed_ios }}</span>
                  </v-layout>
                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="red" size="18">
                      <v-icon dark small>mdi-progress-close</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.failed_ios }}</span>
                  </v-layout>

                  <v-layout justify-center align-baseline>
                    <v-avatar color="blue" size="18">
                      <v-icon dark small>mdi-progress-wrench</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.running_ios }}</span>
                  </v-layout>

                </v-container>
              </v-col>
              <v-divider vertical/>
              <v-divider vertical/>
              <v-col class="my-0 py-0">
                <v-container class="ma-0 pa-0">
                  <v-layout justify-center>
                  <v-icon large :color="project.color">mdi-android</v-icon>
                  </v-layout>
                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="green" size="18">
                      <v-icon dark small>mdi-progress-check</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.passed_android }}</span>
                  </v-layout>

                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="red" size="18">
                      <v-icon dark small>mdi-progress-close</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.failed_android }}</span>
                  </v-layout>

                  <v-layout justify-center align-baseline>
                    <v-avatar color="blue" size="18">
                      <v-icon dark small>mdi-progress-wrench</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.running_android }}</span>
                  </v-layout>
                </v-container>
              </v-col>
              <v-divider vertical/>
              <v-divider vertical/>
              <v-col class="my-0 py-0">
                <v-container class="ma-0 pa-0">
                  <v-layout justify-center>
                  <v-icon large :color="project.color">mdi-microsoft-windows</v-icon>
                  </v-layout>
                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="green" size="18" class="mr-2">
                      <v-icon dark small>mdi-progress-check</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.passed_win }}</span>
                  </v-layout>

                  <v-layout justify-center align-baseline class="mb-n1">
                    <v-avatar color="red" size="18" class="mr-2">
                      <v-icon dark small>mdi-progress-close</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.failed_win }}</span>
                  </v-layout>

                  <v-layout justify-center align-baseline>
                    <v-avatar color="blue" size="18" class="mr-2">
                      <v-icon dark small>mdi-progress-wrench</v-icon>
                    </v-avatar>
                    <v-spacer/>
                    <span>{{ stats.running_win }}</span>
                  </v-layout>
                </v-container>
              </v-col>
            </v-row>

          <v-divider />
            <v-divider />

            <v-layout>
              <span >
                Last test:
              </span>
              <v-spacer/>
              <span class="mr-1">{{ stats.last }}</span>
              <v-icon small>mdi-clock-outline</v-icon>
            </v-layout>

          </v-container>
        </v-layout>
      </v-container>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    stats: {
      type: Object,
      required: false,
    },
  },
};
</script>
