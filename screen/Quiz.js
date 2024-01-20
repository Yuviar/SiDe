import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Container from '../component/Container';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Quiz({navigation}) {
  return (
    <Container onPress={() => navigation.goBack()}>
      <ScrollView
        style={{width: '100%', marginTop: SCREEN_WIDTH / -5}}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Soal')}>
          <View style={{flex: 4.5, marginRight: 2}}>
            <Text style={styles.boxTitle}>Bab 1</Text>
            <Text style={styles.boxDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisad
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.count}>80</Text>
            <Text style={styles.quest}>SOAL</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: SCREEN_HEIGHT / 8.5,
    backgroundColor: 'rgb(143, 186, 243)',
    borderRadius: 16,
    padding: 12,
    marginTop: SCREEN_WIDTH / 20,
    flexDirection: 'row',
    elevation: 3,
  },
  boxTitle: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    textTransform: 'uppercase',
  },
  boxDesc: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  count: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  quest: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
