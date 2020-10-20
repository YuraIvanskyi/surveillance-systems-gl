<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list nav dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFkP9ixx069AA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=15zITW2pyKjSCvE6yPcb2LMqx8gyZxPMhL79C1xbUWY">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Mykhailo Nikolaichuk</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="ma-1"></v-divider>
        <v-list-item-group color="primary lighten-2">
        <v-list-item to="/projects">
          <v-list-item-action>
            <v-icon color="primary lighten-2">mdi-cards</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- temporary link until server established -->
        <v-list-item href="http://10.63.8.163:8080/admin">
          <v-list-item-action>
            <v-icon color="primary lighten-2">mdi-clipboard-list-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Airflow Auto Schedule
              <v-icon x-small color="primary lighten-2">mdi-open-in-new</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="ma-1"></v-divider>

        <v-list-item to="/help">
          <v-list-item-action>
            <v-icon color="primary lighten-2">mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon color="primary lighten-2">mdi-account-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contacts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="ma-1"></v-divider>

        <v-list-item to="/user">
          <v-list-item-action>
            <v-icon color="primary lighten-2">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Preferences</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-breadcrumbs dark :items="routeItems" divider="/">
        <template v-slot:item="{ item }">
          <v-chip small label class="accent--text py-1 px-2">
            <v-breadcrumbs-item
              :to="item.to"
              :exact="item.exact"
              :link="true"
              :disabled="item.disabled"
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </v-chip>
        </template>
      </v-breadcrumbs>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-uppercase accent--text">
        <span class="font-weight-medium">Surveillance</span>
        <span class="font-weight-thin">Dashboard</span>
      </v-toolbar-title>
      <v-icon x-large class="ml-1" color="accent">mdi-cctv</v-icon>
    </v-app-bar>

      <v-main>
        <transition :name="animationName" class="transition">
        <router-view class="child-view" />
        </transition>
      </v-main>
      <v-footer
      fixed
      app
        padless
        max-height="100"
        color="primary"
        elevation="5"
      >
      <v-spacer />
      <span class="white--text mr-5">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      drawer: null,
      animationName: undefined,
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.animationName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
  mounted() {
    const root = '/projects';
    this.$router.push({ path: root });
  },
  computed: {
    routeItems() {
      const items = [];
      const cumbPath = `${this.$route.path}`.replace(/\//g, ',').split(',');
      cumbPath.shift();
      cumbPath.forEach((item) => items.push({
        text: item.toUpperCase(),
        exact: true,
        disabled: ['IOS', 'Android', 'Windows'].includes(item),
        to: `${items[items.length - 1] !== undefined ? `${items[items.length - 1].to}` : ''}/${item}`,
      }));
      return items;
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  width: 100%;
  left: 0;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
.v-application {
  font-family: 'Krub', sans-serif !important;
}
</style>
