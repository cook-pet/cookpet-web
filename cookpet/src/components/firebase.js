import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAn9R6tTLhpazNyP5_HVZxrskkmRivSYkI",
  authDomain: "cookpet-7b0b3.firebaseapp.com",
  databaseURL: "https://cookpet-7b0b3.firebaseio.com",
  projectId: "cookpet-7b0b3",
  storageBucket: "cookpet-7b0b3.appspot.com",
  messagingSenderId: "212142476354"
};
firebase.initializeApp(config);


export default firebase;
