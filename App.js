/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screen/Home';
import DetailsScreen from './src/screen/Details';
import MainScreen from './src/screen/Main';
import Screen1 from './src/screen/Screen1';
import Screen2 from './src/screen/Screen2';

const CreatePostScreen = ({navigation}) => {
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind"
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
          })
        }
      />
    </>
  );
};

const Drawer = createDrawerNavigator();

const MenuScrren = () => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Menu" component={MenuScrren} />
      </Drawer.Navigator> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign: 'center',
              width: '100%',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 100}}
        />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center',
    padding: 16,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    paddingTop: 12,
    marginTop: 12,
  },
});

export default App;
