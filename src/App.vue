<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list nav dense>
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title class="text-uppercase gray--text text-center">
              <span >Surveillance</span>
              <span class="font-weight-light">Systems</span>
              <v-icon color="grey darken-3">mdi-cctv</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="ma-1"></v-divider>
        <v-list-item-group color="teal lighten-2">
        <v-list-item to="/projects">
          <v-list-item-action>
            <v-icon color="teal lighten-2">mdi-cards</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/calendar">
          <v-list-item-action>
            <v-icon color="teal lighten-2">mdi-calendar-cursor</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="ma-1"></v-divider>

        <v-list-item to="/help">
          <v-list-item-action>
            <v-icon color="teal lighten-2">mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon color="teal lighten-2">mdi-account-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contacts</v-list-item-title>
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
      <v-spacer v-show="drawer"></v-spacer>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-thin">Surveillance</span>
        <span class="font-weight-normal">Systems</span>
      </v-toolbar-title>
    </v-app-bar>

      <v-main>
        <transition :name="animationName" class="transition">
        <router-view class="child-view" />
        </transition>
      </v-main>
      <v-footer
        app
      >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    animationName: undefined,
  }),
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.animationName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
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
