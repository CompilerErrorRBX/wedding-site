import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    REGISTRY_ITEMS: {},
    SHOW_RSVP: false,
  },
  mutations: {
    SET_SHOW_RSVP(store, value) {
      const state = store;
      state.SHOW_RSVP = value;
    },

    SET_REGISTRY_ITEMS(store, items) {
      const state = store;
      state.REGISTRY_ITEMS = items;
    },
  },
  actions: {
    getRegistryItems: async (state, eventId) => {
      const registries = await axios.get(`/api/registries/${eventId}`);
      state.commit('SET_REGISTRY_ITEMS', registries.data);

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
