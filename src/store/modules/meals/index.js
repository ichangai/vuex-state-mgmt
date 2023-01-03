import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            meals: [
                {id: 1, name: 'pilau', price: 200, expensive: true},
                {id: 2, name: 'ugali managu', price: 150, expensive: true},
                {id: 1, name: 'chapo', price: 30, expensive: false},
                {id: 1, name: 'rice', price: 100, expensive: false},
            ],
        }
    },
    mutations: {},
    actions: {},
    getters: getters,
}
