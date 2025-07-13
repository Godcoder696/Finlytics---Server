import dotenv from 'dotenv';

dotenv.config();

const PORT= process.env.PORT || 4000;

const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;

const EMAIL_SENDER=process.env.EMAIL_SENDER;
const EMAIL_PASSWORD=process.env.EMAIL_PASSWORD;

const DB_URI=process.env.DB_URI;

const FIREBASE_CONNECT_CONFIG= {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
}

export {
    PORT,CLOUDINARY_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,EMAIL_SENDER,EMAIL_PASSWORD, DB_URI,
    FIREBASE_CONNECT_CONFIG
}