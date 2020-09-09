<template>
  <div>
    <v-card
      width="320"
      height="380"
      elevation=12
      class="px-0 py-0 mx-0 my-0 lighten-1"
      :color="project.color"
      v-ripple="{ class: `${
        project.color.includes(' ') ?
        project.color.split(' ')[0] :
        project.color}--text`}"
      @click="logSomething(project)"
    >
      <v-container class="py-1" fluid>
        <v-row>
          <v-list-item-title
            :class="getTitleClass(project)"
            align="center"
            style="height: 32px;"
          >{{project.name}}</v-list-item-title>
        </v-row>

        <v-row>
          <v-img :src="getCardImage(project)" height="180"/>
          <!-- <v-img src="@/assets/a9.jpg" height="180"></v-img> -->
        </v-row>

        <v-row class="grey lighten-4 pl-2">
          <v-container>
            <v-row>
              <span class="font-weight-light">Services on all platforms</span>
              <v-spacer></v-spacer>
              <v-hover disabled>
                <v-btn text height=24 class="subtitle-1 no-hover" small>
                  8
                </v-btn>
              </v-hover>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests passed</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1 no-hover" small>
                800
              </v-btn>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests failed</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1 no-hover" small>
                555
              </v-btn>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests not tested</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1 no-hover" small >
                3
              </v-btn>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="grey lighten-4">
          <span class=" pl-2 py-1 font-weight-light">
            Last service test: 5 min ago
          </span>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2 no-hover">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getCardImage(project) {
      return project.img;
    },
    getTitleClass(project) {
      console.log(project);
      return project.name.length <= 15 ? 'headline font-weight-medium  grey lighten-3' : 'subtitle-1 font-weight-black grey lighten-3';
    },
    logSomething(project) {
      console.log(project);
    },
  },
  props: ['project'],
};
</script>

<style scoped>
  .no-hover:before {
    color: transparent
  }
</style>
