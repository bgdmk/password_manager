import * as firebase from 'firebase';

  const config = {
        apiKey: "AIzaSyAi8wAvyoet8MJ0JTW872uh7KrNycTVnQ0",
        authDomain: "passm-5577.firebaseapp.com",
        databaseURL: "https://passm-5577.firebaseio.com",
        projectId: "passm-5577",
        storageBucket: "passm-5577.appspot.com",
        messagingSenderId: "655385723353"
      };

export const firebaseApp = firebase.initializeApp(config);
export const dataRef = firebase.database().ref('datas');

 