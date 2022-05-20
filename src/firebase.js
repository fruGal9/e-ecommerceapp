
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// const admin = require("firebase-admin");


// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDWwgZTy8qD24PNzA3KljFumHfxor-jGEA",
    authDomain: "fir-store-marius.firebaseapp.com",
    projectId: "fir-store-marius",
    storageBucket: "fir-store-marius.appspot.com",
    messagingSenderId: "829148845381",
    appId: "1:829148845381:web:ef73ca45fa79291d5d5a2c",
    measurementId: "G-9FLJGHWBFJ"
  };

// var serviceAccount = require("../fir-store-marius-firebase-adminsdk-92q9g-ac23c98d2a.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
  
  // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
  
// var db = admin.firestore();

// var productList = require('../DatafinitiElectronicsProductData.json');

// productList.forEach(function(product) {
//     db.collection("products").add({
//         id: product.id,
//         brand: product.brand,
//         categories: product.categories.split(','),
//         imageURLs: product.imageURLs.split(','),
//         name: product.name,
//         primaryCategories: product.primaryCategories,
//         reviews: product.reviews
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };