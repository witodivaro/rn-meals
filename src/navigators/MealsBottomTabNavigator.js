import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import CategoriesNavigator from './CategoriesNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTab = Platform.select({
  android: createMaterialBottomTabNavigator(),
  default: createBottomTabNavigator(),
});

const MealsBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Categories"
      shifting={true}
      {...Platform.select({
        android: {
          barStyle: {
            backgroundColor: Platform.select({
              default: Colors.primary,
            }),
          },
        },
      })}
      backBehavior="none">
      <BottomTab.Screen
        key="Categories"
        name="Categories"
        component={CategoriesNavigator}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <Icon name="utensils" size={20} color={color} />
          ),
          tabBarColor: Colors.primary,
        }}
      />
      <BottomTab.Screen
        key="Favorites"
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => <Icon name="star" size={20} color={color} />,
          tabBarColor: Colors.secondary,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MealsBottomTabNavigator;
