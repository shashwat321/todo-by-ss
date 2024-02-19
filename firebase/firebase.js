import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJJCW1b0aGNUbu0pea0GuIjwIdVgn8IQY",
  authDomain: "fir-todo-app-3c129.firebaseapp.com",
  projectId: "fir-todo-app-3c129",
  storageBucket: "fir-todo-app-3c129.appspot.com",
  messagingSenderId: "87258158951",
  appId: "1:87258158951:web:91327f139115be127141c2"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);