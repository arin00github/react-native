import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AuthContext} from '../comtext/AuthContext';

function SplashScreen() {
  const {goToLogin} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      console.log('go to login');
      goToLogin();
    }, 3000);
  }, [goToLogin]);

  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
