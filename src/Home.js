import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topTitle}>Ayo Belajar</Text>
        <View style={styles.circle} />
        <View style={[styles.circle, {width: 150, height: 150}]} />
        <View style={[styles.circle, {width: 180, height: 180}]} />
      </View>
      <View style={styles.bottom}>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)',
  },
  top: {
    flex: 1,
    backgroundColor: 'rgb(138,128,181)',
    position: 'relative',
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 25,
    position: 'absolute',
    right: -30,
    top: -30,
  },
  topTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: 'white',
    margin: 28,
  },
  bottom: {
    flex: 2.5,
    backgroundColor: 'rgb(250,250,250)',
  },
});
