import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBB1w53vqOzDjYreV4cDfYIwKGHDEE5Hb8',
  authDomain: 'fluff-a063b.firebaseapp.com',
  databaseURL: 'https://fluff-a063b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fluff-a063b',
  storageBucket: 'fluff-a063b.appspot.com',
  messagingSenderId: '835935443108',
  appId: '1:835935443108:web:d9d9eff1705ba368cc6e31',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);
const db = getFirestore();
const storage = getStorage();

export { auth, provider, db, storage };
