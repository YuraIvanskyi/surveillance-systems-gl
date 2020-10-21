<template>
<v-layout justify-center>
    <v-row class="px-3">
      <v-col cols="12">
        <v-card-title>Profile - mykhailo.nikolaichuk@gameloft.com</v-card-title>
      </v-col>
      <!-- Projects view -->
        <v-col lg="6">
            <v-list
            subheader
            two-line
            flat
            >
            <v-subheader>Projects view settings</v-subheader>
                <v-list-item-group
                  multiple
                  active-class=""
                >
                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Show only my projects</v-list-item-title>
                      <v-list-item-subtitle>Hides projects you're not interested in
                        or responsible for.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Hide sparklines</v-list-item-title>
                      <v-list-item-subtitle>Hide line charts on project cards</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Hide services info</v-list-item-title>
                      <v-list-item-subtitle>Hides stats about running, passed
                        or failed scripts on cards</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        </v-col>
        <!-- Services view -->
        <v-col lg="6">
            <v-list
            subheader
            two-line
            flat
            >
            <v-subheader>Services view settings</v-subheader>
                <v-list-item-group
                  multiple
                  active-class=""
                >
                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Hide empty platform</v-list-item-title>
                      <v-list-item-subtitle>Hides tables for platform without
                        connected services
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Collapsable tables</v-list-item-title>
                      <v-list-item-subtitle>Allows to minify platform tables</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-list-item>
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>Extra sorting</v-list-item-title>
                      <v-list-item-subtitle>Enables additional sorting
                        by all columns</v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-group>
            </v-list>
        </v-col>
    </v-row>
</v-layout>
</template>
<script>
import { profiles } from '../main';

export default {
  data: () => ({
    currentUser: 'mykhailo.nikolaichuk@gameloft.com',
    settings: [],
    profile: profiles.filter((item) => item.user === 'mykhailo.nikolaichuk@gameloft.com')[0],
  }),
};
</script>
