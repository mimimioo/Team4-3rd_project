import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

<<<<<<< HEAD
// Storage에 대한 기본 참조 생성
 export const storageRef = ref(storage);
=======
export default storage;
>>>>>>> a5ce24168c72a099a63c2b720fbecdb10a7122b6
