import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBlaL-6dEpeaOq5nOl4Ppge2wuJeIh2des",
    authDomain: "e-ride-92e16.firebaseapp.com",
    projectId: "e-ride-92e16",
    storageBucket: "e-ride-92e16.appspot.com",
    messagingSenderId: "537557442951",
    appId: "1:537557442951:web:a3009c2ceea7cabbe07322"
  };
//

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
