import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWkC-TjpPrqw4rref9c3poXjm9Nyxqms",
  authDomain: "crwn-clothing-db-6cdb8.firebaseapp.com",
  projectId: "crwn-clothing-db-6cdb8",
  storageBucket: "crwn-clothing-db-6cdb8.appspot.com",
  messagingSenderId: "190277393555",
  appId: "1:190277393555:web:628117bb5013770ed9c166",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
