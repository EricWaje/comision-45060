import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAV-dV7mWAomzpK2ZlRGdf7PHoiL6uXVQA',
    authDomain: 'react-45060-profe.firebaseapp.com',
    projectId: 'react-45060-profe',
    storageBucket: 'react-45060-profe.appspot.com',
    messagingSenderId: '376958279021',
    appId: '1:376958279021:web:07d045fd56cc0006cace64',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const collectionProd = collection(db, 'productos');
