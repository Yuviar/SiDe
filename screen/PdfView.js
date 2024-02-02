import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Pdf from 'react-native-pdf';
import {ref, getDownloadURL} from 'firebase/storage';
import {storage} from '../config';
import RNFS from 'react-native-fs';

export default function PdfView({route}) {
  const {name} = route.params;
  const [pdfUrl, setPdfUrl] = useState('');
  const fetchDataList = async () => {
    // const storageRef = ref(storage, `pdf/${name}`);
    // await getDownloadURL(storageRef).then(x => {
    //   console.log(x);
    //   setPdfUrl(x);
    // });
    // return;
    const storageRef = ref(storage, `pdf/${name}`);
    try {
      const url = await getDownloadURL(storageRef);

      // Download PDF locally using react-native-fs
      const localFilePath = `${RNFS.CachesDirectoryPath}/${name}`;
      const options = {
        fromUrl: url,
        toFile: localFilePath,
      };
      const response = await RNFS.downloadFile(options);

      // Set local file path to state
      setPdfUrl(`file:/${localFilePath}`);
    } catch (error) {
      console.error('Error fetching or verifying PDF URL:', error);
    }
    return;
  };

  useEffect(() => {
    fetchDataList();
  }, []);

  return (
    <View style={styles.container}>
      {console.log(pdfUrl)}
      <Text style={styles.title}>{name.split('.').slice(0, -1).join('.')}</Text>
      <Pdf
        source={{
          uri: pdfUrl,
          cache: true,
        }}
        onLoadError={error => console.error('PDF Load Error:', error)}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    padding: 10,
  },
});
