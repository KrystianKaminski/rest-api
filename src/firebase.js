import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC3ijE0n-Ogy3uTATxFcYrxmye536PBNcM",
    authDomain: "krystian-kaminski.firebaseapp.com",
    databaseURL: "https://krystian-kaminski.firebaseio.com",
    projectId: "krystian-kaminski",
    storageBucket: "krystian-kaminski.appspot.com",
    messagingSenderId: "185496303101"
  };

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();