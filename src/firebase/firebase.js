import firebase from 'firebase/app'
import 'firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyCr-lKsjh6FmUkvcSBbMLnUW6GZEmLEzLI",
    authDomain: "credit-carddata.firebaseapp.com",
    projectId: "credit-carddata",
    storageBucket: "credit-carddata.appspot.com",
    messagingSenderId: "70791314998",
    appId: "1:70791314998:web:4b7a28cdbba0043263a297",
    measurementId: "G-EC1067GWFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase