import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../comtext/AuthContext';

function SignInScreen() {
  const {signIn} = React.useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputForm}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputForm}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputForm: {
    border: '1px solid #555555',
    margin: 10,
  },
});

export default SignInScreen;
