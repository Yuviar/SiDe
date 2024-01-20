import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Container from '../component/Container';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Soal({navigation}) {
  return (
    <Container onPress={() => navigation.goBack()}>
      <View style={styles.wrapper}>
        <ScrollView
          style={{
            maxHeight: '20%',
            marginBottom: SCREEN_WIDTH / 20,
          }}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.quest}>
            Ada empat jenis batuan yaitu batuan P, Q, R, dan S. Batuan P dapat
            menggores batuan Q dan batuan S. Batuan P dan batuan S tidak dapat
            menggores batuan R sedangkan batuan Q dapat menggores batuan S. Dari
            keempat batuan tersebut, batuan yang paling keras dan paling lembek
            adalah ....
          </Text>
        </ScrollView>
        <View style={styles.answerWrapper}>
          <Text style={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </Text>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.answer}>
            Berada diantara Yupiter dan Saturnus, ukurannya antara 2 - 750 km,
            sulit dipengaruhi gravitasi planet lain
          </Text>
        </View>
        <View style={styles.answerWrapper}>
          <Text style={styles.answer}>Lorem ipsum dolor</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn}>
            <Icon name={'chevron-back-outline'} size={25} color={'black'} />
          </TouchableOpacity>
          {/* <Icon name={'sparkles-outline'} color={'white'} size={25} /> */}
          <TouchableOpacity style={styles.btn}>
            <Icon name={'chevron-forward-outline'} size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: SCREEN_HEIGHT / 1.4,
    marginTop: SCREEN_WIDTH / -5,
    backgroundColor: 'rgb(143, 186, 243)',
    borderRadius: 35,
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  quest: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    textAlign: 'center',
  },
  answerWrapper: {
    width: '100%',
    height: SCREEN_WIDTH / 5.5,
    backgroundColor: 'rgb(220, 242, 241)',
    borderRadius: 10,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  answer: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SCREEN_WIDTH / 15,
  },
  btn: {
    padding: 10,
    backgroundColor: 'rgb(220, 242, 241)',
    borderRadius: 100,
  },
});
