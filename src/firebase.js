import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqDRi3i_QcfzSPnY6G_nAAvgSrL24xXyc",
  authDomain: "email-password-auth-657c8.firebaseapp.com",
  projectId: "email-password-auth-657c8",
  storageBucket: "email-password-auth-657c8.appspot.com",
  messagingSenderId: "40351683472",
  appId: "1:40351683472:web:56106b5783d862bc639915",
  measurementId: "G-9HM6QSTBVJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
