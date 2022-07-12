/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.post) {
      console.log(route);
    }
  }, [route]);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home Screen</Text>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('Create Post')}
      />
      <Text>Post : {route.params?.post}</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

const DetailsScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home Screen</Text>
      <Text>itemId : {JSON.stringify(itemId)}</Text>
      <Text>otherParam : {JSON.stringify(otherParam)}</Text>
      <Button
        style={styles.button}
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        style={styles.button}
        title="Go to Details ... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        style={styles.button}
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

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

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
