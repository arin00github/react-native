/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screen/Home';
import {AuthContext} from './src/comtext/AuthContext';
import SplashScreen from './src/screen/Splash';
import SignInScreen from './src/screen/SignIn';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          const {username, password} = action.payload;
          if ((username === 'happy', password === 'happy')) {
            return {
              ...prevState,
              isSingout: false,
              userToken: action.payload.token,
            };
          } else {
            // eslint-disable-next-line no-alert
            alert('invalid account information');
            return {
              ...prevState,
            };
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSingout: true,
            userToken: null,
          };
        case 'GO_TO_LOGIN':
          return {
            ...prevState,
            isLoading: false,
          };
      }
    },
    {isLoading: true, isSingout: true, userToken: null},
  );

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({
          type: 'SIGN_IN',
          payload: {
            token: 'dummy-auth-token',
            password: data.password,
            username: data.username,
          },
        });
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_UP', token: 'dummy-auth-token'});
      },
      goToLogin: () => dispatch({type: 'GO_TO_LOGIN'}),
    }),
    [],
  );

  useEffect(() => {
    console.log('useEffect');
    // const bootstrapAsync = async () => {
    //   const userToken = 'dummy-auth-token';
    //   dispatch({type: 'RESTORE_TOKEN', token: userToken});
    // };
    // bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading && (
            <Stack.Screen name="Splash" component={SplashScreen} />
          )}
          {!state.isLoading && state.userToken ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'sign in',
                animationTypeForReplace: state.isSingout ? 'pop' : 'push',
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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
