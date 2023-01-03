export default {
        getMealById: (state) => (id) => {
            return state.meals.find(meal => meal.id === id);
            },
        expMeals(state){
            return state.meals.filter(meal => meal.expensive);
        },
        expMealCount(state, getters){
            return getters.expMeals.length;
        },
}