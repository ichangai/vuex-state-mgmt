<template>
   <main>
     <h2>Expensive Meal Component (Expensive:  {{ expCount }})</h2>
        <div v-for="meal in expensiveMeals" :key="meal.id">
            <a href="#" @click.prevent="onSelectedMeal(meal.id)" >
                <p>{{ meal.name }} - ({{ meal.expensive ? 'Expensive': 'Affordable'}})</p>
            </a>
        </div>
    <div v-if="selectedId">
        <h3>Selected meals</h3>  
        <div> Id: {{ meal.id }}</div>
        <div> Name: {{ meal.name }}</div>
        <div> Price: {{ meal.price }}</div>
    </div>
    </main>      
</template>



<script>
import { mapGetters, mapState } from 'vuex';
export default {
    data(){
        return {
            selectedId: 0,
            meal: '',
        }
    },
    computed:{
        ...mapState({
            meals: state => state.meals.meals
        }),
        ...mapGetters('meals', {
            expCount: 'expMealCount',
            expensiveMeals: 'expMeals',
            mealById: 'getMealById'
        }),
        // meal(){
        //     return this.meals.find(meal => meal.id === this.selectedId);
        // }
    },
    methods: {
        onSelectedMeal(id){
            this.selectedId = id;
            this.meal = this.mealById(id)
        },
    }
}  
</script>

<style>

</style>
