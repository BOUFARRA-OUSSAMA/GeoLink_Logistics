// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6W2uieQZhqkL4_L4IgPTrwBkalnJ7kUA",
  authDomain: "key-being-420806.firebaseapp.com",
  projectId: "key-being-420806",
  storageBucket: "key-being-420806.appspot.com",
  messagingSenderId: "122739519877",
  appId: "1:122739519877:web:ac283de9197b6621d114ec",
  measurementId: "G-JD5BFZ78LV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
