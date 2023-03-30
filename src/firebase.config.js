import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGS3sKD5Pjr0sW798Rmnk33ufLlnwXeao",
  authDomain: "restaurantapp-783d5.firebaseapp.com",
  databaseURL: "https://restaurantapp-783d5-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-783d5",
  storageBucket: "restaurantapp-783d5.appspot.com",
  messagingSenderId: "380904287587",
  appId: "1:380904287587:web:95ff4b4a319ef3bc45b756"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
