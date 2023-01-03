import { createStore } from 'vuex';
import counterModule from './modules/counter/index';
import mealsModule from './modules/meals/index';

const store = createStore({
    modules: {
        counter: counterModule,
        meals: mealsModule,
    },
    state(){

    },
    mutations: {},
    actions: {},
    getters: {},
});

export default store;