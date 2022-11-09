
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBJffL-bd-hSuR7tg6G7cfRrJl63elAkU4",
  authDomain: "miniblog-9bc9e.firebaseapp.com",
  projectId: "miniblog-9bc9e",
  storageBucket: "miniblog-9bc9e.appspot.com",
  messagingSenderId: "856612905101",
  appId: "1:856612905101:web:01d1aad85de4b98cf542c4"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};