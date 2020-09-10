<template>
  <v-container>
    <v-layout class="pa-3" fluid wrap justify-space-around>
      <v-card outlined class="mb-2 pa-2" max-width="450">
        <v-card-text outlined class="text-justify font-weight-light black--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et repudiandae corrupti, distinctio rem, aperiam tenetur iure quaerat repellendus officia quia obcaecati cupiditate earum fuga praesentium. Ratione unde eius eveniet officiis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa doloremque, eveniet, accusantium at in fuga quia accusamus ipsa nam laboriosam. Quae perferendis temporibus est tempora! Nostrum veniam culpa modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores eaque quae nihil in minima reiciendis necessitatibus nostrum delectus incidunt maiores mollitia, possimus officiis ex eius aliquid doloremque ab debitis! <!-- eslint-disable-line max-len -->
          </v-card-text>
        <v-layout justify-center>
          <img width="300" max-width="400" src="https://i.pinimg.com/originals/f6/73/fd/f673fd99dd3e2a7f7e6631a14c9fdfa1.png" />
        </v-layout>
      </v-card>
      <v-card outlined class="mx-2 mb-2" max-width="450">
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader class="indigo--text display-1" v-if="item.header" :key="item.header"
              v-text="item.header"></v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar size="70">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-if="item.maintainer">{{ item.title }}
                  <v-chip x-small color="indigo" dark>maintainer</v-chip>
                </v-list-item-title>
                <v-list-item-title v-else>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>Email: {{ item.email }}</v-list-item-subtitle>
                <v-list-item-subtitle>Skype: {{ item.skype }}</v-list-item-subtitle>
                <v-list-item-subtitle>Mattermost: {{ item.mattermost }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
      <v-card outlined class="mx-2 mb-2" max-width="450">
        <v-list three-line>
          <template v-for="(item, index) in general">
            <v-subheader class="indigo--text display-1" v-if="item.header" :key="item.header"
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
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: 'LVI Automation Team' },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://sdl-stickershop.line.naver.jp/products/0/0/1/1297924/android/stickers/12053415.png',
        title: 'Yuriy Ivanskyi',
        email: 'yuriy.ivanskyi@gameloft.com',
        skype: 'y.ivanskyi',
        maintainer: true,
        mattermost: 'yuriy.ivanskyi',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://image.myanimelist.net/ui/ogNrt6xjoxcgp7z0v_1Zi_ahAnI6tgzvIVv1vi3cnvL23N6vr9jXfTXCDfRHXBjUhtExvjTF07RoP4-ecfacMb8gPk_TPxLYmpMN0BzAf-SaJVW78F1Z-f05fBjSHHgmUKj2uwzG76sWB4-2sepP5Q',
        title: 'Igor Kurbanov',
        email: 'igor.kurbanov@gameloft.com',
        skype: 'frankenstain447',
        mattermost: 'igor.kurbanov',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ca/caa21d2a4218b1f27a9a12b9d6825bb9052d316e_full.jpg',
        title: 'Serhii Uhalnykov',
        email: 'serhii.uhalnykov@gameloft.com',
        skype: 'serhii.uhalnykov@gameloft.com',
        mattermost: 'serhii.uhalnykov',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://cdn.myanimelist.net/r/360x360/images/characters/3/203443.jpg?s=7277b0323c7e3f4ec6abd72bc03cd4c9',
        title: 'Mykhailo Nikolaichuk',
        email: 'mykhailo.nikolaichuk@gameloft.com',
        skype: 'live:mykhailo.nikolaichuk',
        mattermost: 'mykhailo.nikolaichuk',
      },
      { divider: true, inset: true },
      {
        color: 'light-blue darken-2',
        avatar:
          'https://vignette.wikia.nocookie.net/slap-on-titan5669/images/0/0d/Connie.png/revision/latest?cb=20180922181222',
        title: 'Yuriy Monastyrskyi',
        email: 'yura.monastyrskyy@gameloft.com',
        skype: 'yura.monastyrskyy',
        mattermost: 'yura.monastyrskyy',
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
