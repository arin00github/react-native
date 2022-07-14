import React from 'react';
import {View} from 'react-native';
import FeedScreen from './Feed';
import MsgsScreen from './Messages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Messages"
        component={MsgsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
