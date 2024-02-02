import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../component/Container';
import {firebase} from '../config';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Quiz({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const db = firebase.firestore();
    const snapshot = await db.collection('soals').get();
    const itemsData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    // console.log(snapshot);
    setData(itemsData);
    setLoading(false);
  };

  return (
    <Container onPress={() => navigation.goBack()} back={true}>
      <ScrollView
        style={{width: '100%', marginTop: SCREEN_WIDTH / -5}}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator animating={true} size={'large'} />
        ) : (
          data.map(i => (
            <TouchableOpacity
              style={styles.box}
              onPress={() => setModalVisible(true)}
              key={i.kategori}>
              <View style={{flex: 4.5, marginRight: 2}}>
                <Text style={styles.boxTitle}>{i.kategori}</Text>
                <Text style={styles.boxDesc}>{i.deskripsi}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.count}>{i.soal.length}</Text>
                <Text style={styles.quest}>SOAL</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {data.map(i => (
            <View style={styles.modalView} key={i.id}>
              <View style={styles.mLine} />
              <Text style={styles.modalTitle}>
                Konfirmasi untuk mulai mengerjakan
              </Text>
              <View style={styles.mBtnContainer}>
                {/* {console.log(i)} */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Quiz', {kategori: i.kategori})
                  }
                  style={[styles.mBtn, {backgroundColor: 'rgb(2, 69, 163)'}]}>
                  <Text style={styles.mBtnText}>Ya</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={[styles.mBtn, {backgroundColor: 'rgb(230, 0, 0)'}]}>
                  <Text style={styles.mBtnText}>Tidak</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    height: SCREEN_HEIGHT / 3,
    width: SCREEN_WIDTH / 1.3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  mBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mBtn: {
    borderRadius: 10,
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mBtnText: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  mLine: {
    backgroundColor: 'black',
    width: SCREEN_WIDTH,
    height: 1,
  },
  mBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'red',
  },
});
