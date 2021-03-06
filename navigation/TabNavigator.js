import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';

import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Menu') {
            return (
              <Ionicons name='fast-food-outline' size={size} color={color} />
            );
          } else if (route.name === 'Cart') {
            return <AntDesign name='shoppingcart' size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{ tabBarBadge: cartQuantity }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
