import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        async GET_USERS_FROM_API({ commit }) {
            const response = await axios('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users', {
                method: 'GET'
            });
            commit('SET_USERS_TO_VUEX', response.data);
        }

    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users;
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    },
})

export default store;