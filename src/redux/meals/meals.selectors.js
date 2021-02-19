import {createSelector} from 'reselect';

const selectMeals = (state) => state.meals;

export const selectMealsData = createSelector(
  selectMeals,
  (meals) => meals.data,
);

export const createSelectMealById = (mealId) =>
  createSelector(selectMealsData, (mealsData) =>
    mealsData.find((meal) => meal.id === mealId),
  );
