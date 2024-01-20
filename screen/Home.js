import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.block, {marginBottom: SCREEN_WIDTH / 8}]}
        onPress={() => navigation.navigate('Materi')}>
        <Text style={styles.blockTitle}>Materi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.block}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.blockTitle}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15, 16, 53)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    backgroundColor: 'rgb(217, 217, 217)',
    borderRadius: 20,
    width: SCREEN_WIDTH / 1.2,
    height: SCREEN_HEIGHT / 4,
    justifyContent: 'center',
  },
  blockTitle: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 46,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
