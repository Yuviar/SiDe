import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCtEQiOJasF2va6nH5YseQcf3adhyyAzB0',
  authDomain: 'side-db870.firebaseapp.com',
  projectId: 'side-db870',
  storageBucket: 'side-db870.appspot.com',
  messagingSenderId: '460485661884',
  appId: '1:460485661884:web:b5ab99e618fd87d580acb9',
  measurementId: 'G-E6M4519G7C',
};
export {firebaseConfig};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
export const storage = getStorage();
