import admin from 'firebase-admin';
import adminCredentials from '../../firebaseConnectConfig.json' with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(adminCredentials),
});

export default admin