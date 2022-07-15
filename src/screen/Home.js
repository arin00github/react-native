import React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../comtext/AuthContext';

function HomeScreen() {
  //const {} = React.useContext();
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="sign out" onPress={() => signOut()} />
    </View>
  );
}

export default HomeScreen;
