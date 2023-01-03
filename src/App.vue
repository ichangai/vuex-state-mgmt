<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import CounterVue from './components/Counter.vue';
import Meal from './components/Meal.vue'
import { COUNTER_ON_INCREMENT } from './store/storeconstants'


export default {
  components: {
    CounterVue,
    Meal
  },
  methods: {
    ...mapActions({
      onIncrement: `${COUNTER_ON_INCREMENT}`
    })
    // onIncrement(){
    //   this.$store.dispatch('increment', {value: 3});
    // }
  },

  computed:{
        ...mapState({
          count: state => state.counter.count
        }),
        ...mapGetters({
          expCount: 'meals/expMealCount'
        }),

    
    },
};

</script>

<template>
  <div>
    <CounterVue />

    <div class="">
      <h3>App Vue Counter</h3>
      <p>{{ count }}</p>
      <button @click.prevent="onIncrement({ value: 2})">
        Count Increment
      </button>
    </div>
    <Meal />

    <div class="">
      <h3>App Vue Expensive Meals</h3>
      Expensive Meals : {{ expCount }}
    </div>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
