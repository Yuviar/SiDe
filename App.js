import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screen/Splash';
import Home from './screen/Home';
import Quiz from './screen/Quiz';
import Materi from './screen/Materi';
import Soal from './screen/Soal';
import PdfView from './screen/PdfView';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';

const Stack = createNativeStackNavigator();
export default function App() {
  const unsubscribe = NetInfo.addEventListener(state => {
    if (state.isConnected === false) {
      Alert.alert(
        'Tidak ada koneksi internet!',
        'Pastikan terhubung dengan koneksi internet',
        [
          {
            text: 'Muat Ulang',
            onPress: () => RNRestart.restart(),
          },
        ],
      );
    } else if (state.isConnected === true) {
      console.log('Connect');
    }
  });
  useEffect(() => {
    unsubscribe();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Soal" component={Soal} />
        <Stack.Screen name="Materi" component={Materi} />
        <Stack.Screen name="PdfView" component={PdfView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
