// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa5a9_RWg1aUhe417BUe75yONRDR5xXWI',
  authDomain: 'entertainment-web-app-87503.firebaseapp.com',
  projectId: 'entertainment-web-app-87503',
  storageBucket: 'entertainment-web-app-87503.appspot.com',
  messagingSenderId: '61681500147',
  appId: '1:616815001477:web:42e92ab5c4cbca002d0eec',
};

let appLength = getApps().length;
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth, appLength };
