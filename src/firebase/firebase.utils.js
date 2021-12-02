import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyC-q4kHvP0Txxi2dg2Bqu1jKsCHTu69GsE',
  authDomain: 'syed-clothing-db.firebaseapp.com',
  projectId: 'syed-clothing-db',
  storageBucket: 'syed-clothing-db.appspot.com',
  messagingSenderId: '83996294448',
  appId: '1:83996294448:web:77fb814e2facc3282c9cf5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
