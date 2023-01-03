<script>
import { mapState, mapActions } from 'vuex';
import { COUNTER_INCREMENT, COUNTER_ACTIONB } from '../store/storeconstants';

export default{
    data() {
        return {
            // count: 0,
        }
    },

    computed:{
        ...mapState({
        count: state => state.counter.count
    }),
    },
    methods: {
        ...mapActions('counter', {
            onIncrement: `${COUNTER_ACTIONB}`
        }),
    }
}
</script>

<template>
    <div>
        <h3>Counter</h3>
        <p>{{ count }}</p>
        <button @click.prevent="onIncrement()">Count Increment</button>
    </div>
</template>