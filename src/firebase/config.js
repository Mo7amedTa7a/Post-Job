import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  addDoc,
  query,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDAOaANOyht3IcnzY3DMYPcqYkDaoJnvI4",
  authDomain: "jobfilter-63d95.firebaseapp.com",
  projectId: "jobfilter-63d95",
  storageBucket: "jobfilter-63d95.firebasestorage.app",
  messagingSenderId: "23141132020",
  appId: "1:23141132020:web:54322fed1226f14ed920a1",
  measurementId: "G-KHWLKJG1M4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export { fireStore, collection, getDocs, where, addDoc, query };
