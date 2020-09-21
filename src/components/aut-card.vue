<template>
    <v-card
      max-width="340"
      min-width="240"
      min-height="320"
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
        <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            auto-draw
            stroke-linecap="round"
            smooth="2"
            label-size="14"
            auto-line-width
            padding="20"
          ></v-sparkline>
            <v-divider/>

        <v-layout class="grey lighten-4">
          <v-container class="pt-1 pb-0 px-2 font-weight-light">
            <v-layout justify-end>
              <span>Services on all platforms</span>
              <v-spacer/>
              <span>{{ Math.floor((100 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests passed</span>
              <v-spacer/>
              <span>{{ Math.floor((50 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests failed</span>
              <v-spacer/>
              <span>{{ Math.floor((10 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests not tested</span>
              <v-spacer/>
              <span>{{ Math.floor((90 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider />
            <v-divider />

            <v-layout>
              <span >
                Last service test:
              </span>
              <v-spacer/>
              <span class="mr-1">5 min ago</span>
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
      labels: [
        '0',
        '3',
        '6',
        '9',
        '12',
        '15',
        '18',
        '21',
      ],
      value: [
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
        Math.floor((33 - 1 + 1) * Math.random()) + 1,
      ],
    };
  },
  methods: {
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    projectStats: {
      type: Object,
      required: false,
    },
  },
};
</script>
