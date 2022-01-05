import Firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAU5z8-epdz6CgZlY2zTFi-yvPXlXs1SGE",
  authDomain: "login-ff258.firebaseapp.com",
  projectId: "login-ff258",
  storageBucket: "login-ff258.appspot.com",
  messagingSenderId: "130278063784",
  appId: "1:130278063784:web:9aa81238514379936f4c9d"
};


const fire = Firebase.initializeApp(firebaseConfig);
export default fire;