import 'firebase/firestore';

import firebase from 'firebase';
import firebaseConf from './config';

console.log(firebaseConf);
const app = firebase.initializeApp(firebaseConf);

export const storage = app.storage();

export default app.firestore();
