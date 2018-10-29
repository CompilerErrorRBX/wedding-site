<template>
  <div>
    <v-container>
      <v-subheader>RSVPs</v-subheader>
      <v-list two-line>
        <v-list-tile v-for="rsvp in rsvps" :key="rsvp.id">
          <v-list-tile-content>
            <v-list-tile-title>{{rsvp.fullName}}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ rsvp.confirmed ? 'Accepted' : 'Declined' }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
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
