import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import App1 from './App1';
import Details from './details';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
      }} >
        <Tab.Screen options={{ 
          tabBarIcon :()=><MaterialIcons name="home" size={20}/>
        }} name="Home" component={App1} />
        <Tab.Screen 
          options={{ tabBarLabel :"details tab "  , 
            tabBarBadge: 1,

            tabBarIcon :(color) =><MaterialIcons name="person" color={color}  size ={20}/>
          }}
          name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}