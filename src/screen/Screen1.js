import React, {useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Screen1 = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.post) {
      console.log(route);
    }
  }, [route]);

  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.sectionContainer, {backgroundColor: '#ecf0f1'}]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Theme</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('Screen2')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Screen1;
