// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

let app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const moviesCollection = await getDocs(collection(db, 'Movies'));
moviesCollection.forEach((item) => {
  console.log(item.id, ' =>', item.data());
});

const tvseriesCollection = await getDocs(collection(db, 'TVseries'));
moviesCollection.forEach((item) => {
  console.log(item.id, ' =>', item.data());
});

const trendingCollection = await getDocs(collection(db, 'Trending'));
moviesCollection.forEach((item) => {
  console.log(item.id, ' =>', item.data());
});

export {
  app,
  storage,
  auth,
  provider,
  db,
  // moviesCollection,
  // tvseriesCollection,
  // trendingCollection,
};
