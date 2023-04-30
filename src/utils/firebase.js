
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDxTyVWOj7H-W7CA7Fw-fVISQOFewok4UM",
  authDomain: "react-user-auth-85d1c.firebaseapp.com",
  projectId: "react-user-auth-85d1c",
  storageBucket: "react-user-auth-85d1c.appspot.com",
  messagingSenderId: "620063132336",
  appId: "1:620063132336:web:2dfe74d864ea26d036c975",
  measurementId: "G-2N8433TR5W"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;