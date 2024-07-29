// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbCs7U3lobe67QAFBES__VS1n2OJZBMi4',
  authDomain: 'learn-lingo-d669c.firebaseapp.com',
  databaseURL: 'https://learn-lingo-d669c-default-rtdb.firebaseio.com',
  projectId: 'learn-lingo-d669c',
  storageBucket: 'learn-lingo-d669c.appspot.com',
  messagingSenderId: '144321487766',
  appId: '1:144321487766:web:45b25ffc4c2ba6dcfef3b7',
  measurementId: 'G-0KCSBVRRT7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
