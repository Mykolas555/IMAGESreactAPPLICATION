import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADhjyJbYZd1Q2ihaJWwVNtutCUS2Tzuk",
  authDomain: "imagesapplicationreact.firebaseapp.com",
  projectId: "imagesapplicationreact",
  storageBucket: "imagesapplicationreact.appspot.com",
  messagingSenderId: "381599148659",
  appId: "1:381599148659:web:c78c8173294f4bc91d1806"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export { app }