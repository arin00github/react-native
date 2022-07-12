import React from 'react';

import FeedScreen from './Feed';
import MsgsScreen from './Messages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={MsgsScreen} />
      <Tab.Screen naem="Messages" component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
