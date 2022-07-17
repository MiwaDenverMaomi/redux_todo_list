// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm8tVJMgaPzPmKB50_R6TCQwF_KRsmYpU",
  authDomain: "redux-todo-list-firebase.firebaseapp.com",
  projectId: "redux-todo-list-firebase",
  storageBucket: "redux-todo-list-firebase.appspot.com",
  messagingSenderId: "473856670054",
  appId: "1:473856670054:web:13845c1488193f5b9130a7",
  measurementId: "G-4JL8XKRST0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);