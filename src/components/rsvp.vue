<template>
  <v-dialog v-model="dialog" persistent max-width="500px" :fullscreen="$vuetify.breakpoint.xsOnly">
    <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
    <v-card class="rsvp">
      <v-card-title class="fancy-title">
        <span class="text-center">RSVP</span>
      </v-card-title>
      <v-card-text class="text-center">
        <span class="v-label">Please submit your RSVP by November 16th, 2018.</span>
      </v-card-text>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-flex xs12 sm4>
                <v-text-field disabled label="# Guests" required type="number" :value="attendees.length" />
              </v-flex>
            </v-flex>
            <v-flex xs12 v-for="(attendee, index) in attendees" :key="index">
              <v-text-field
                ref="guest-name"
                label="Guest Fullname"
                required
                append-outer-icon="close"
                @click:append-outer="removeMember(attendee)"
              />
            </v-flex>
            <v-btn @click="addMember">Add Guest</v-btn>
            <v-flex xs12>
              <v-radio-group
                :class="{ 'inline': $vuetify.breakpoint.smAndUp }"
                row
                mandatory
                v-model="attending"
              >
                <v-radio label="Will be attending" :value="true" />
                <v-radio label="Will not be attending" :value="false" />
              </v-radio-group>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="toggleShow(false)">Cancel</v-btn>
        <v-btn flat @click.native="toggleShow(false)">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    attendees: [{ name: '' }],
    attending: true,
  }),
  computed: {
    ...mapState({
      dialog: state => state.SHOW_RSVP,
    }),
  },
  methods: {
    toggleShow(value) {
      // this.$store.state.SHOW_RSVP = value;
      this.$store.commit('SET_SHOW_RSVP', value);
    },
    addMember() {
      this.attendees.push({ name: '' });
    },
    removeMember(attendee) {
      this.attendees.splice(this.attendees.indexOf(attendee), 1);
    },
  },
};
</script>

<style lang="scss">
  .rsvp {
    .fancy-title {
      font-family: 'Dancing Script', cursive;
      font-size: 2.5rem;
    }

    .v-label {
      font-family: 'Dancing Script', cursive;
      font-size: 1.5rem;
    }

    .v-input--radio-group__input.inline {
      justify-content: center;
    }
  }
</style>
