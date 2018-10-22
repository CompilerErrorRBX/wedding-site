import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    REGISTRY_ITEMS: {},
  },
  mutations: {
    SET_REGISTRY_ITEMS(store, items) {
      const state = store;
      state.state.REGISTRY_ITEMS = items;
    },
  },
  actions: {
    getRegistryItems: async (state, eventId) => {
      const registries = await axios.get(`api/registries/${eventId}`);
      state.commit('setRegistries', registries.data);

      return registries.data;
    },
  },
});
