// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,

    authDomain: "whatsapp-clone-c8a97.firebaseapp.com",

    projectId: "whatsapp-clone-c8a97",

    storageBucket: "whatsapp-clone-c8a97.appspot.com",

    messagingSenderId: "804758572907",

    appId: "1:804758572907:web:c58b2741ae87886851862e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);