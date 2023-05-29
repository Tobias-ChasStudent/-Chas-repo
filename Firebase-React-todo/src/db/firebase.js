import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRvYbIEvisK06C6Tp2i3WLbOttT0CIhg8",
    authDomain: "react-todo-d4f68.firebaseapp.com",
    projectId: "react-todo-d4f68",
    storageBucket: "react-todo-d4f68.appspot.com",
    messagingSenderId: "81277120381",
    appId: "1:81277120381:web:3c2083d80941bd689fa614"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
