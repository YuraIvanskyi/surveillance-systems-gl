<template>
  <div>
    <v-card
      width="320"
      height="380"
      v-for="project in projects"
      :key="project.name"
      elevation=12
      class="px-0 py-0 mx-6 my-0 red lighten-1"
      :color="project.color"
    >
      <v-container class="py-1" fluid>
        <v-row>
          <v-list-item-title
            class="headline font-weight-medium  grey lighten-3"
            align="center"
          >{{project.name}}</v-list-item-title>
        </v-row>

        <v-row>
          <!-- <v-img
          src="https://diwem.github.io/framework/images/wall.jpg"
          :lazy-src="`../assets/${project.img}`"
          height="180
          "></v-img> -->
          <!-- <img :src="getCardImage(project)" height="180"/> -->
          <v-img src="@/assets/a9.jpg" height="180"></v-img>
        </v-row>

        <v-row class="grey lighten-4 pl-2">
          <v-container>
            <v-row>
              <span class="font-weight-light">Services on all platforms</span>
              <v-spacer></v-spacer>
              <v-hover disabled>
                <v-btn text height=24 class="subtitle-1" small>
                  {{project.servicesAmount}}
                </v-btn>
              </v-hover>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests passed</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1" small>
                {{project.servicesPassed}}
              </v-btn>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests failed</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1" small>
                {{project.servicesFailed}}
              </v-btn>
            </v-row>
            <v-divider width="275"></v-divider>
            <v-row>
              <span class="font-weight-light">Services tests not tested</span>
              <v-spacer></v-spacer>
              <v-btn text height=24 class="subtitle-1" small>
                {{project.servicesNotTested}}
              </v-btn>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="grey lighten-4">
          <span class=" pl-2 py-1 font-weight-light">
            Last service test: {{project.lastTest}} min ago
          </span>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2">
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
    return {
      projects: [
        {
          name: 'Asphalt 9',
          img: 'a9.jpg',
          color: 'red',
          servicesAmount: 21,
          servicesPassed: 16,
          servicesFailed: 3,
          servicesNotTested: 2,
          lastTest: 5,
        },
        // {
        //   name: 'My Little Pony',
        //   img: 'ndot yet',
        //   color: 'pink',
        //   servicesAmount: 25,
        //   servicesPassed: 11,
        //   servicesFailed: 2,
        //   servicesNotTested: 1,
        //   lastTest: 4,
        // },
      ],
    };
  },
  methods: {
    getCardImage(project) {
      console.log(project);
      return project.img;
    },
  },
};
</script>
