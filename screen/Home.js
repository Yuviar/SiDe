import {
  Dimensions,
  Image,
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
      <Image
        source={require('../assets/img/bg.png')}
        style={[styles.globe, {top: 100, right: -50}]}
      />
      <Image
        source={require('../assets/img/bg.png')}
        style={[styles.globe, {bottom: 200, left: -50}]}
      />
      <Text style={styles.title}>Welcome to SIDE</Text>
      <TouchableOpacity
        style={[
          styles.block,
          {marginBottom: SCREEN_WIDTH / 8, backgroundColor: '#0245A3'},
        ]}
        onPress={() => navigation.navigate('Materi')}>
        <Text style={[styles.blockTitle, {color: 'white'}]}>Materi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.block, {backgroundColor: '#8FBAF3'}]}
        onPress={() => navigation.navigate('Soal')}>
        <Text style={styles.blockTitle}>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SCREEN_WIDTH / 6,
    position: 'relative',
  },
  block: {
    // backgroundColor: 'rgb(217, 217, 217)',
    borderRadius: 20,
    width: SCREEN_WIDTH / 1.2,
    height: SCREEN_HEIGHT / 4,
    justifyContent: 'center',
    elevation: 3,
  },
  blockTitle: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 46,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    fontSize: 34,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: -50,
    // alignSelf: 'flex-start',
  },
  globe: {
    width: 220,
    height: 220,
    position: 'absolute',
    opacity: 0.5,
  },
});
