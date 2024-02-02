import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Container({children, onPress, back}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginTop: SCREEN_WIDTH / -7,
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              position: 'absolute',
              left: SCREEN_WIDTH / -4.5,
              display: back ? 'flex' : 'none',
            }}>
            <Icon name={'arrow-back-outline'} color={'white'} size={32} />
          </TouchableOpacity>
          <Text style={styles.topTitle}>SIDE</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bg}>
          <Image
            source={require('../assets/img/bg.png')}
            style={[styles.bgImg, {bottom: -100, left: -120}]}
          />
          <Image
            source={require('../assets/img/bg.png')}
            style={[styles.bgImg, {top: -150, right: -150}]}
          />
        </View>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    flex: 1,
    backgroundColor: '#0245A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitle: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 42,
  },
  bottom: {
    flex: 2.7,
    backgroundColor: 'white',
    paddingHorizontal: SCREEN_WIDTH / 12,
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
  bgImg: {
    width: 380,
    height: 380,
    position: 'absolute',
    opacity: 0.3,
  },
});
