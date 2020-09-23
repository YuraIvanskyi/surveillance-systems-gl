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
              <span>{{ stats.all }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests passed</span>
              <v-spacer/>
              <span>{{ stats.passed }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests failed</span>
              <v-spacer/>
              <span>{{ stats.failed }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services under test</span>
              <v-spacer/>
              <span>{{ stats.running }}</span>
            </v-layout>

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
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
        Math.floor((100 - 1 + 0) * Math.random()) + 0,
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
    stats: {
      type: Object,
      required: false,
    },
  },
};
</script>
