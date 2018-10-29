<template>
  <div>
    <v-container>
      <v-subheader>RSVPs</v-subheader>
      <v-list>
        <v-list-tile v-for="rsvp in rsvps" :key="rsvp.id">
          {{ rsvp.fullName }}
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState({
      rsvps: state => state.RSVPS,
    }),
  },
  data: () => ({
  }),
  methods: {
  },
  updated() {

  },
};
</script>

<style lang="scss">

</style>
