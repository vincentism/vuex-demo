import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: 'first', done: true },
            { id: 2, text: 'second', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        getTodoById: (state, getters) => (id) => {
            return state.todos.find(todo => todo.id === id );
        }
    },
    mutations,
    actions
});

export default store;