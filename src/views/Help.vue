<template>
<v-layout class="px-5">
    <v-row justify="center">
      <v-col
      cols="12" lg="12" sm="12" md="12" xs="12" xl="6"
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
          title: 'Tell me a suggestion you have made that was implemented in this surveillance field?',
          value: 'It\'s important here to focus on the word "implemented." There\'s nothing wrong with having a thousand great ideas, but if the only place they live is on your notepad what\'s the point? Better still, you need a good ending. If your previous company took your advice and ended up going bankrupt, that\'s not such a great example either. Be prepared with a story about an idea of yours that was taken from idea to implementation, and considered successful.',
          category: 'Surveillance',
        },
        {
          title: 'What experience do you have in this surveillance field?',
          value: 'Hopefully if you\'re applying for this position you have bags of related experience, and if that\'s the case you should mention it all. But if you\'re switching careers or trying something a little different, your experience may initially not look like it\'s matching up. That\'s when you need a little honest creativity to match the experiences required with the ones you have. People skills are people skills after all, you just need to show how customer service skills can apply to internal management positions, and so on.',
          category: 'Surveillance',
        },
        {
          title: 'What are the points that are covered while planning phase of automation?',
          value: 'During planning phase of automation things which must be taken in concern are\n - Selection the "right" Automation tool\n - Selection Automation Framework if any\n - List of In scope and out of scope items for automation\n - Test Environment Setup\n - Preparing Grant Chart of Project timelines for test script development & execution.\n - Identify Test Deliverables',
          category: 'Surveillance',
        },
        {
          title: 'What is a framework?',
          value: 'A framework is a set of the structure of the entire automation suite. It is also a guideline, which if followed can result in a structure that is easy to maintain and enhance.',
          category: 'Surveillance',
        },
        {
          title: 'Do you think that testing can be done only at the UI level?',
          value: 'Today as we are moving to the Agile mode, testing is not limited to the UI layer. Early feedback is imperial for an agile project. If we concentrate only on the UI layer, we are actually waiting until the UI is developed and available to test.',
          category: 'Surveillance',
        },
      ],
    };
  },
};
</script>
