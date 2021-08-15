import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    common: {
      menu: false,
    },
    activeApplication: [],
  },
  mutations: {
    displayMenu(state: any, boolean: boolean) {
      state.common.menu = boolean;
      // Only mutate state here
    },
  },
  actions: {
    async displayMenu(context, boolean: boolean) {
      // await call if needed
      context.commit('displayMenu', boolean)
      // dispatch another action if needed
    }
  },
  modules: {},
});
