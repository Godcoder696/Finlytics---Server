import admin from 'firebase-admin';
import { FIREBASE_CONNECT_CONFIG } from '../constants.js';

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_CONNECT_CONFIG),
});

export default admin