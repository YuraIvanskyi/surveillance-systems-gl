<template>
<v-col cols="12">
  <v-row justify="center" class="my-1" align="stretch">
    <v-btn text small color="grey darken-2" @click="$refs.calendar.prev()">
      <v-icon small>mdi-chevron-left</v-icon>previous
    </v-btn>
    <v-spacer/>
    <v-select dense :items="['day', 'week', 'month']" label="Display Mode" v-model="type"/>
    <v-spacer/>
    <v-btn text small color="grey darken-2" @click="$refs.calendar.next()">
      next<v-icon small>mdi-chevron-right</v-icon>
    </v-btn>
  </v-row>
    <v-calendar
      ref="calendar"
      v-model="value"
      :weekdays="weekday"
      :short-weekdays="false"
      :type="type"
      :events="events"
      :event-overlap-mode="mode"
      :event-overlap-threshold="30"
      :event-color="getEventColor"
      @change="getEvents"
    >
    </v-calendar>
</v-col>
</template>

<script>
import { projects } from '../main';

export default {
  data: () => ({
    type: 'week',
    mode: 'stack',
    weekday: [1, 2, 3, 4, 5, 6, 0],
    value: '',
    events: [],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  computed: {
    getProjectColors() {
      const colors = [];
      projects.forEach((item) => colors.push(item.color));
      return colors;
    },
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i += 1) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.getProjectColors[this.rnd(0, this.getProjectColors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style>
.v-calendar-weekly__head-weekday {
  font-size: 14px !important;
}
</style>
