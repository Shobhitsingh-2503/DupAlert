// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore'
// const firebaseConfig = {
//   apiKey: "AIzaSyCqDRi3i_QcfzSPnY6G_nAAvgSrL24xXyc",
//   authDomain: "email-password-auth-657c8.firebaseapp.com",
//   projectId: "email-password-auth-657c8",
//   storageBucket: "email-password-auth-657c8.appspot.com",
//   messagingSenderId: "40351683472",
//   appId: "1:40351683472:web:56106b5783d862bc639915",
//   measurementId: "G-9HM6QSTBVJ",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db =  getFirestore(app);
// export { app, auth, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0dYeyhVKcx5OocwIhU7s4_HUwCRDCeFA",
  authDomain: "sih-1659-f89ea.firebaseapp.com",
  projectId: "sih-1659-f89ea",
  storageBucket: "sih-1659-f89ea.appspot.com",
  messagingSenderId: "7414194353",
  appId: "1:7414194353:web:463e4dc8d06699f06cc290",
  measurementId: "G-N1GHZPH2TE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
