import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLfJv104G7kKiQnUIQnUGpFPuX_hZjng",
  authDomain: "imagesapp-5d49c.firebaseapp.com",
  projectId: "imagesapp-5d49c",
  storageBucket: "imagesapp-5d49c.appspot.com",
  messagingSenderId: "59550718181",
  appId: "1:59550718181:web:37868f0022395b8ce89c0c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export { app }