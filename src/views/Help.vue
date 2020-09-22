<template>
<v-layout class="px-5">
    <v-row justify="center">
      <v-col
      cols="12" lg="12" sm="12" md="12" xs="12" xl="8"
       >
        <v-card>
          <v-tabs
          grow
          v-model="currentTab"
          >
            <v-tab>
              Manual
            </v-tab>
            <v-tab>
              Surveillance
            </v-tab>
          </v-tabs>

          <v-tabs-items>
              <v-expansion-panels accordion>
                <v-expansion-panel
                  v-for="(item,i) in sortedQuestions"
                  :key="i"
                >
                  <v-expansion-panel-header >
                    {{ item.title }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ item.value }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  computed: {
    sortedQuestions() {
      return this.questions.filter((item) => item.category === this.currentTabNamed);
    },
    currentTabNamed() {
      return this.currentTab === 0 ? 'Manual' : 'Surveillance';
    },
  },
  components: {
  },
  data() {
    return {
      currentTab: 'Manual',
      questions: [
        {
          title: 'What is the difference between Quality Assurance, Quality Control, and Testing?',
          value: 'Quality Assurance is the process of planning and defining the way of monitoring and implementing the quality(test) processes within a team and organization. This method defines and sets the quality standards of the projects. Quality Control is the process of finding defects and providing suggestions to improve the quality of the software. The methods used by Quality Control are usually established by quality assurance. It is the primary responsibility of the testing team to implement quality control. Testing is the process of finding defects/bugs. It validates whether the software built by the development team meets the requirements set by the user and the standards set by the organization. Here, the main focus is on finding bugs and the testing teams work as a quality gatekeeper.',
          category: 'Manual',
        },
        {
          title: 'When do you think QA activities should start?',
          value: 'QA activity should start at the beginning of the project. The more early it starts the more beneficial it is to set the standard for achieving the quality. The cost, time and efforts are very challenging in case the QA activities get delayed.',
          category: 'Manual',
        },
        {
          title: 'What is the difference between the Test Plan and Test Strategy? ',
          value: 'Test Strategy is at a higher level, mostly created by the Project Manager which demonstrates the overall approach of the testing for the entire project, whereas the Test plan depicts how the testing should be performed for a particular application, falling under a project.',
          category: 'Manual',
        },
        {
          title: 'Can you explain the Software Testing Life Cycle?',
          value: 'Software Testing Life Cycle refers to a testing process that has specific steps to be executed in a definite sequence to ensure that the quality goals have been met.',
          category: 'Manual',
        },
        {
          title: 'What is a good test case?',
          value: 'In simple words, a good test case is one that finds a defect. But all test case will not find defects, so a good test case can also be one which has all the prescribed details and coverage.',
          category: 'Manual',
        },
        {
          title: 'What is the difference between Quality Assurance, Quality Control, and Testing?',
          value: 'Quality Assurance is the process of planning and defining the way of monitoring and implementing the quality(test) processes within a team and organization. This method defines and sets the quality standards of the projects. Quality Control is the process of finding defects and providing suggestions to improve the quality of the software. The methods used by Quality Control are usually established by quality assurance. It is the primary responsibility of the testing team to implement quality control. Testing is the process of finding defects/bugs. It validates whether the software built by the development team meets the requirements set by the user and the standards set by the organization. Here, the main focus is on finding bugs and the testing teams work as a quality gatekeeper.',
          category: 'Surveillance',
        },
        {
          title: 'When do you think QA activities should start?',
          value: 'QA activity should start at the beginning of the project. The more early it starts the more beneficial it is to set the standard for achieving the quality. The cost, time and efforts are very challenging in case the QA activities get delayed.',
          category: 'Surveillance',
        },
        {
          title: 'What is the difference between the Test Plan and Test Strategy? ',
          value: 'Test Strategy is at a higher level, mostly created by the Project Manager which demonstrates the overall approach of the testing for the entire project, whereas the Test plan depicts how the testing should be performed for a particular application, falling under a project.',
          category: 'Surveillance',
        },
        {
          title: 'Can you explain the Software Testing Life Cycle?',
          value: 'Software Testing Life Cycle refers to a testing process that has specific steps to be executed in a definite sequence to ensure that the quality goals have been met.',
          category: 'Surveillance',
        },
        {
          title: 'What is a good test case?',
          value: 'In simple words, a good test case is one that finds a defect. But all test case will not find defects, so a good test case can also be one which has all the prescribed details and coverage.',
          category: 'Surveillance',
        },
      ],
    };
  },
};
</script>
