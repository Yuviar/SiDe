import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Container from '../component/Container';
import {ref, listAll} from 'firebase/storage';
import {storage} from '../config';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Materi({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataList = async () => {
      setLoading(true);
      const storageRef = ref(storage, 'pdf/');
      const result = await listAll(storageRef);
      const promises = result.items.map(itemRef => {
        return {name: itemRef.name};
      });
      const dataList = await Promise.all(promises);
      setData(dataList);
      setLoading(false);
    };
    fetchDataList();
  }, []);
  return (
    <Container onPress={() => navigation.goBack()} back={true}>
      {/* {console.log(data)} */}
      <ScrollView style={{width: '100%', marginTop: SCREEN_WIDTH / -5}}>
        {loading ? (
          <ActivityIndicator animating={true} size={'large'} />
        ) : (
          data.map(item => (
            <TouchableOpacity
              style={styles.box}
              key={item.name}
              onPress={() => navigation.navigate('PdfView', {name: item.name})}>
              <View style={{flex: 4.5, marginRight: 2}}>
                <Text style={styles.boxTitle}>
                  {item.name.split('.').slice(0, -1).join('.')}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
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
});
