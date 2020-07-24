import * as firebase from 'firebase';




var config={
  apiKey: "AIzaSyBgcCT6l5lLw36likDNYEvLuyrUrlDLqYA",
  authDomain: "photowall-app-855e2.firebaseapp.com",
  databaseURL: "https://photowall-app-855e2.firebaseio.com",
  projectId: "photowall-app-855e2",
  storageBucket: "photowall-app-855e2.appspot.com",
  messagingSenderId: "90980352343",
  appId: "1:90980352343:web:96969c048f5023e8453e12",
  measurementId: "G-7YYFN0VR0H"
};

/*var config = {
    apiKey: "AIzaSyB3Zw0W9-ZYxJtLro7DatxNBbsrYoIjwAE",
    authDomain: "photowall-163bb.firebaseapp.com",
    databaseURL: "https://photowall-163bb.firebaseio.com",
    projectId: "photowall-163bb",
    storageBucket: "photowall-163bb.appspot.com",
    messagingSenderId: "174931704585",
    appId: "1:174931704585:web:91d2855e0f561d592bb1d8",
    measurementId: "G-VMR59NCNFT"
  };*/

  firebase.initializeApp(config)
  const database =firebase.database()
  export {database}