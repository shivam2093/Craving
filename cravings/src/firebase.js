import firebase from "firebase";


var apikey = process.env.API_KEY_FIREBASE;

const firebaseApp = firebase.initializeApp({



    apiKey: `AIzaSyBqHCXn_VEyFU4ByaYM7aeWSDfSvEmCyFg`,
    authDomain: "cravings-288600.firebaseapp.com",
    databaseURL: "https://cravings-288600.firebaseio.com",
    projectId: "cravings-288600",
    storageBucket: "cravings-288600.appspot.com",
    messagingSenderId: "770742140745",
    appId: "1:770742140745:web:4f9dddc7b7a2c0a6112498",
    measurementId: "G-L8QL8ZCJKN",



});




const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    // ... 
};

const auth = firebase.auth();

export default auth; 