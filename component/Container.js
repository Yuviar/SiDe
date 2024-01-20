import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Container({children, onPress}) {
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
            style={{position: 'absolute', left: SCREEN_WIDTH / -4.5}}>
            <Icon name={'arrow-back-outline'} color={'white'} size={32} />
          </TouchableOpacity>
          <Text style={styles.topTitle}>SIDE</Text>
        </View>
      </View>
      <View style={styles.bottom}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
