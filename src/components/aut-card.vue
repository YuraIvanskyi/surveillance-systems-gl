<template>
    <v-card
      max-width="350"
      min-width="240"
      min-height="320"
      elevation=12
      class="pa-0 ma-0"
      :color="project.color"
      v-ripple="{ class: `${
        project.color.includes(' ') ?
        project.color.split(' ')[0] :
        project.color}--text`}"
      :to="$route.path + '/' + project.tag"
    >
      <v-container class="px-0 py-1">
        <v-layout class="grey lighten-4">
          <v-list-item-title
            :class="getTitleClass(project)"
            align="center"
            style="height: 32px;">
          {{ project.name }}
          </v-list-item-title>
        </v-layout>

        <v-img :src="project.img" height="160"/>

        <v-layout class="grey lighten-4">
          <v-container class="pt-1 pb-0 px-2 font-weight-light">
            <v-layout justify-end>
              <span>Services on all platforms</span>
              <v-spacer/>
              <span>{{ Math.floor((3133 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests passed</span>
              <v-spacer/>
              <span>{{ Math.floor((333 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests failed</span>
              <v-spacer/>
              <span>{{ Math.floor((9 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

            <v-layout>
              <span>Services tests not tested</span>
              <v-spacer/>
              <span>{{ Math.floor((33 - 1 + 1) * Math.random()) + 1 }}</span>
            </v-layout>

            <v-divider/>

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
    return {};
  },
  methods: {
    getTitleClass(project) {
      return project.name.length <= 15 ? 'headline font-weight-medium' : 'subtitle-1 font-weight-bold';
    },
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
