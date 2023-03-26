
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWKGz2GiJiYSaGxdqjqn5fAZdDCz0nNPs",
  authDomain: "evervibe-6c846.firebaseapp.com",
  projectId: "evervibe-6c846",
  storageBucket: "evervibe-6c846.appspot.com",
  messagingSenderId: "91094338467",
  appId: "1:91094338467:web:5300cc2727f721547da816",
  measurementId: "G-08L52RVW6W"
};


export const app = initializeApp(firebaseConfig);