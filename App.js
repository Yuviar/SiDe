import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import Quiz from './screen/Quiz';
import Materi from './screen/Materi';
import Soal from './screen/Soal';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Soal" component={Soal} />
        <Stack.Screen name="Materi" component={Materi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
