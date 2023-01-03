import { 
    COUNTER_ON_INCREMENT, 
    COUNTER_INCREMENT,
    COUNTER_ACTIONA,
    COUNTER_ACTIONB,

} from './../../storeconstants';

export default {
    namespaced: true,
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        [COUNTER_ON_INCREMENT](state, payload){
            state.count = state.count + payload.value;
        }
    },
    actions: {
        [COUNTER_INCREMENT](context, payload){
            context.commit(COUNTER_ON_INCREMENT, payload);
        },
        [COUNTER_ACTIONA](context){
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit(COUNTER_ON_INCREMENT, {value: 1})
                    resolve('done')
                }, 1000)
            })
        },
        [COUNTER_ACTIONB](context){
            context.dispatch(COUNTER_ACTIONA).then((response) => {
                console.log(response);
                console.log('calling successfully from actionB');
            })
        }
    },
    getters: {},
}
