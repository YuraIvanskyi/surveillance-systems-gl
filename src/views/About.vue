<template>
    <v-layout justify-center class="px-3">
      <v-row>
        <v-col cols="12" lg="6" sm="12" md="6" xs="12" xl="6" class="ma-0 pe-3">
          <v-card outlined class="ma-0">
            <v-card-title>Dashboard Info</v-card-title>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-1-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Dashboard data is independent from scripts/Airflow. Nothing will be lost!
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-2-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Newly added projects appear empty unless services added for specific platforms.
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-3-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Each project's card shows amount of services tested on all platforms.
                  These services appear as Passed (green), Failed (red) and Running (blue).
                  Newly added services without active runs/previous runs do not count.
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-4-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Opening Project->Service will navigate to script runs for selected
                  service for last 2 days.
                  Each script run contains logs, screenshots and reports in case of need.
                </span>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6" xs="12" xl="6" class="ma-0 pe-3">
          <v-card outlined class="ma-0">
            <v-card-title>Airflow Usefull Info</v-card-title>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-1-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Setup in Airflow is done via host Linux machine in LVI.
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-2-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Device 'farm' is a set of IOS &amp; Android devices connected locally to MAC/Win.
                  To get more info regarding devices, please contact the team.
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-3-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Service tests - DAGs - are auto-filled from Gitlab repository to host machine.
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-4-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Users can trigger needed DAG manually on Airflow console.
                  Be aware of current device schedules!
                </span>
              </v-layout>
            </v-card-text>
            <v-divider/>
            <v-card-text>
              <v-layout align-center>
                <v-icon class="mr-4">mdi-numeric-5-circle-outline</v-icon>
                <span class="mr-4 text-md-body-1 custom-font font-weight-medium">
                  Airflow gathers logs from all parts of the system.
                  In case of issues, they might provide valuable input for further troubleshooting.
                </span>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6" xs="12" xl="4" class="pe-3">
          <v-card outlined>
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader color="primary"
                  class="subtitle-1 text-uppercase font-weight-medium"
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"></v-subheader>

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar size="70">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>Email: {{ item.email }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Skype: {{ item.skype }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Mattermost: {{ item.mattermost }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6" xs="12" xl="4" class="pe-3">
            <v-card outlined>
              <v-list three-line>
                <template v-for="(item, index) in general">
                  <v-subheader color="primary"
                    class="subtitle-1 text-uppercase font-weight-medium"
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"></v-subheader>

                  <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar size="70">
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                      <v-list-item-subtitle>Email: {{ item.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
        </v-col>
        <v-col cols="12" lg="6" sm="12" md="6" xs="12" xl="4" class="pe-3">
          <v-card outlined>
            <v-list three-line>
              <template v-for="(item, index) in items_help">
                <v-subheader color="primary"
                  class="subtitle-1 text-uppercase font-weight-medium"
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"></v-subheader>

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar size="70">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>Email: {{ item.email }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Skype: {{ item.skype }}</v-list-item-subtitle>
                    <v-list-item-subtitle>Mattermost: {{ item.mattermost }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: 'LVI Automation Team' },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24f9afdd-27c7-47d1-969e-90c1ddfe60e3/d4yeqf7-d50234eb-fbe3-4949-8cba-e6dc6d6ef8bb.jpg/v1/fill/w_600,h_416,q_75,strp/green_tree_python_baby__morelia_viridis__by_nadilynbeato_d4yeqf7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MTYiLCJwYXRoIjoiXC9mXC8yNGY5YWZkZC0yN2M3LTQ3ZDEtOTY5ZS05MGMxZGRmZTYwZTNcL2Q0eWVxZjctZDUwMjM0ZWItZmJlMy00OTQ5LThjYmEtZTZkYzZkNmVmOGJiLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Hg9xPl33ztGBdaavXBkSm1B8lc13gVkG2QJmAITibks',
        title: 'Yuriy Ivanskyi',
        email: 'yuriy.ivanskyi@gameloft.com',
        skype: 'y.ivanskyi',
        mattermost: 'yuriy.ivanskyi',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglFVdzTlmOTsV9jfFBnZwX2dXv_ccnRGsmg&usqp=CAU',
        title: 'Yuriy Monastyrskyi',
        email: 'yura.monastyrskyy@gameloft.com',
        skype: 'yura.monastyrskyy',
        mattermost: 'yura.monastyrskyy',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://sdtimes.com/wp-content/uploads/2019/07/green-tree-python-1014229_640-490x326.jpg',
        title: 'Serhii Uhalnykov',
        email: 'serhii.uhalnykov@gameloft.com',
        skype: 'serhii.uhalnykov@gameloft.com',
        mattermost: 'serhii.uhalnykov',
      },
    ],
    items_help: [
      { header: 'Impact from shadows' },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://media-exp1.licdn.com/dms/image/C560BAQEVENb2zOhN4w/company-logo_200_200/0/1607357991470?e=2159024400&v=beta&t=djUA-LiChOby0oNTJ5KwCmAt6h8depUyam5TLNo-QYE',
        title: 'Bodgan Racovita',
        email: 'bodgan.racovita@gameloft.com',
        skype: '-',
        mattermost: 'bodgan.racovita',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://media-exp1.licdn.com/dms/image/C560BAQEVENb2zOhN4w/company-logo_200_200/0/1607357991470?e=2159024400&v=beta&t=djUA-LiChOby0oNTJ5KwCmAt6h8depUyam5TLNo-QYE',
        title: 'Vlad Panait',
        email: 'vlad.panait@gameloft.com',
        skype: '-',
        mattermost: 'vlad.panait',
      },
    ],
    general: [
      { header: 'General Contacts' },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fiOLXWCvvl3Ehmno0wU0a6Wq8qL1vJChIcU4rrTIfnHhDz3k',
        title: 'Lviv Automation Team',
        email: 'LVI-QA-Automation@gameloft.com',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fiOLXWCvvl3Ehmno0wU0a6Wq8qL1vJChIcU4rrTIfnHhDz3k',
        title: 'IOS Automation QA Team',
        email: 'ios-qa-automation@gameloft.com',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fiOLXWCvvl3Ehmno0wU0a6Wq8qL1vJChIcU4rrTIfnHhDz3k',
        title: 'Automation Tool & Library Team',
        email: 'QALib-Support@gameloft.com',
      },
    ],
  }),
};
</script>
<style scoped>
.custom-font {
  font-family: 'Krub', sans-serif !important;
}
</style>
