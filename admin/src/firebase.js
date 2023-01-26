import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUWySt8J1HS0js9k8gjRcGETF7-VrVyyk",
    authDomain: "movieflix-8afb1.firebaseapp.com",
    projectId: "movieflix-8afb1",
    storageBucket: "movieflix-8afb1.appspot.com",
    messagingSenderId: "773725209151",
    appId: "1:773725209151:web:3f545ff57d9e943f21ee8a",
    measurementId: "G-15XM6SHPWC"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;