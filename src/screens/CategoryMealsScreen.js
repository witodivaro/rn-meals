import React, {useCallback, useEffect, useMemo} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import useComponentWillMount from '../hooks/componentWillMount';

import MealItem from '../components/MealItem';

import MEALS from '../mock/meals';
import {useSelector} from 'react-redux';
import {createSelectCategoryTitleById} from '../redux/categories/categories.selectors';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params.id;
  const categoryTitle = useSelector(createSelectCategoryTitleById(categoryId));

  const filteredMeals = useMemo(() =>
    MEALS.filter((meal) => meal.categoryIds.includes(categoryId), [categoryId]),
  );

  const updateHeaderTitle = useCallback(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle]);

  useComponentWillMount(() => {
    updateHeaderTitle();
  });

  const renderMealItem = ({item}) => <MealItem mealItem={item} />;

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{
          padding: 20,
        }}
        data={filteredMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
