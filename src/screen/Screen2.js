import React, {useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Screen2 = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.post) {
      console.log(route);
    }
  }, [route]);

  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.sectionContainer, {backgroundColor: '#6a51ae'}]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Light Theme</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('Screen1')}
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

export default Screen2;
