import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../component/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import {firebase} from '../config';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Soal({navigation, route}) {
  const [data, setData] = useState({});
  const [answer, setAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [back, setBack] = useState(true);

  const {kategori} = route.params;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const db = firebase.firestore();
    const snapshot = db.collection('soals');
    const itemsData = await snapshot.where('kategori', '==', kategori).get();
    const getData = itemsData.docs.map(doc => ({id: doc.id, ...doc.data()}));
    // console.log(getData[0].soal);
    setData(getData[0].soal);
    setLoading(false);
  };
  const handleAnswer = selectedAnswer => {
    const jawaban = data[answer]?.jawaban;
    if (jawaban === selectedAnswer) {
      setScore(prev => prev + 1);
    }

    const next = answer + 1;
    setBack(false);
    if (next < data.length) {
      setAnswer(next);
    } else {
      setShowScore(true);
    }
  };
  const handleRestart = () => {
    setAnswer(0), setScore(0), setShowScore(false), setBack(true);
  };
  return (
    <Container onPress={() => navigation.goBack()} back={back}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <View style={styles.score}>
            <Text style={styles.scoreText}>
              SKOR : {(score / data.length) * 100}
            </Text>
          </View>
          <View style={styles.true}>
            <Text style={styles.scoreText}>BENAR : {score}</Text>
          </View>
          <View style={styles.false}>
            <Text style={styles.scoreText}>SALAH : {data.length - score}</Text>
          </View>
          <TouchableOpacity
            style={styles.restart}
            onPress={() => handleRestart()}>
            <Text style={styles.scoreText}>RESTART</Text>
          </TouchableOpacity>
          {/* <Text style={{color: 'black'}}>{score}</Text>
          <Text style={{color: 'black'}} >
            Restart
          </Text> */}
        </View>
      ) : (
        <View style={styles.wrapper}>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            style={{display: loading ? 'flex' : 'none'}}
          />
          <ScrollView
            style={{
              height: '20%',
              marginBottom: SCREEN_WIDTH / 20,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.quest}>{data[answer]?.pertanyaan}</Text>
          </ScrollView>
          {data[answer]?.pilihan.map(item => (
            <TouchableOpacity
              style={styles.answerWrapper}
              onPress={() => handleAnswer(item)}
              key={item}>
              <Text style={styles.answer}>{item}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.btn}>
              <Icon name={'chevron-back-outline'} size={25} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Icon
                name={'chevron-forward-outline'}
                size={25}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    overflow: 'scroll',
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
  scoreContainer: {
    backgroundColor: 'rgb(143, 186, 243)',
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    marginTop: SCREEN_WIDTH / -5,
    borderRadius: 35,
    padding: 35,
    justifyContent: 'space-between',
  },
  score: {
    width: '100%',
    height: '30%',
    backgroundColor: '#DCF2F1',
    borderRadius: 10,
    padding: 10,
  },
  true: {
    width: '100%',
    height: '18%',
    backgroundColor: '#DCF2F1',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  false: {
    width: '100%',
    height: '18%',
    backgroundColor: '#DCF2F1',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
  restart: {
    width: '100%',
    height: '15%',
    backgroundColor: '#DCF2F1',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  scoreText: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
});
