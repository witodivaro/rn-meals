import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import CategoryItem from '../components/CategoryItem';

import CATEGORIES from '../mock/categories';

const renderGridItem = ({item}) => {
  return <CategoryItem {...item} />;
};

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      contentContainerStyle={[styles.screen]}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
  },
});

export default CategoriesScreen;
