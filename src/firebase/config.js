import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6sJZEulDzstFTxMHWJbWiNzacKptKZoE",
  authDomain: "cloudnine-398ff.firebaseapp.com",
  projectId: "cloudnine-398ff",
  storageBucket: "cloudnine-398ff.appspot.com",
  messagingSenderId: "1041367713222",
  appId: "1:1041367713222:web:0bcb029b1c20dc11d4dec7",
  measurementId: "G-EV51HK7T7G",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
