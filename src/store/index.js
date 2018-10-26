import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    REGISTRIES: {},
    SHOW_RSVP: false,
  },
  mutations: {
    SET_SHOW_RSVP(store, value) {
      const state = store;
      state.SHOW_RSVP = value;
    },

    SET_REGISTRIES(store, items) {
      const state = store;
      state.REGISTRIES = items;
    },
  },
  actions: {
    getRegistries: async (state) => {
      const registries = await axios.post('/api', {
        query: `query getSources {
          getSources {
            id title url
            items {
              thumbnail name price quantity desiredQuantity url
            }
          }
        }`,
      });
      state.commit('SET_REGISTRIES', registries.data.data.getSources);

      return registries.data;
    },
    postGroupRSVP: async (state, rsvpInput) => {
      await axios.post('/api', {
        query: `mutation addGroupRSVP($rsvps: RSVPGroupInput!) {
          addGroupRSVP(rsvps: $rsvps) {
            groupId
          }
        }`,
        variables: { rsvps: rsvpInput },
      });
    },
  },
});
