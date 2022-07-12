import React, {useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

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
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
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

export default HomeScreen;
