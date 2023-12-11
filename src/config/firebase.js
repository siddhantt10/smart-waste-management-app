// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA79aFh_hAhjkrub_datMTDkwghbwNXE4",
  authDomain: "smart-waste-management-epics.firebaseapp.com",
  projectId: "smart-waste-management-epics",
  storageBucket: "smart-waste-management-epics.appspot.com",
  messagingSenderId: "690147992393",
  appId: "1:690147992393:web:93dda714d95f89a4173098",
  measurementId: "G-4B975Y27RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);