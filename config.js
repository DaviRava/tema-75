import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCaMEY0VpH8nfbVv7Q__vTs90TzbyXPrnk",
  authDomain: "tema-75.firebaseapp.com",
  projectId: "tema-75",
  storageBucket: "tema-75.appspot.com",
  messagingSenderId: "79161476182",
  appId: "1:79161476182:web:1b99e410475d2da8b2a7f7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
