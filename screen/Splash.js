import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('Home', {token: 1});
  }, 2000);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});
