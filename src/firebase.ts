import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRXxthOAZHCxJbX5dYrsT1IF7uHpZt22s',
  authDomain: 'rrr-app-155a6.firebaseapp.com',
  projectId: 'rrr-app-155a6',
  storageBucket: 'rrr-app-155a6.firebasestorage.app',
  messagingSenderId: '605846295410',
  appId: '1:605846295410:web:abd3377a51a336346103eb'
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;