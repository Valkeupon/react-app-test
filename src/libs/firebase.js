import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBpnjcxvtO1WPL-brH9jHa4oqM42JrnBDY",
  authDomain: "website-kapsul-9a992.firebaseapp.com",
  databaseURL: "https://website-kapsul-9a992.firebaseio.com",
  projectId: "website-kapsul-9a992",
  storageBucket: "website-kapsul-9a992.appspot.com",
  messagingSenderId: "14616293680"
};
firebase.initializeApp(config);
let ref = firebase.database().ref();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
let authdata = firebase.auth().currentUser;

export default {
  getDatas: (params) => {
    ref = firebase.database().ref(params);
    let array = [];

    return new Promise((resolve, reject) => {
      ref.on("value", function(snapshot) {
        const data = snapshot.val();
        if(!data){
          reject(data);
        }

        for(let key in data) {
          data[key]._id = key;
          array.push(data[key]);
        }
        resolve(array);

        }, function (error) {
         console.log("Error: " + error.code);
      })
    });
  },
  insertDatas: (params, data) => {
    ref = firebase.database().ref(params);
    data.archived = false;
    ref.push(data);
  },
  updateDatas: (data) => {
    ref = firebase.database().ref("Dates/" + data._id);
    ref.set(data);
  },
  deleteDatas: (data) => {
    ref = firebase.database().ref("Dates/" + data._id);
    data.archived = true;
    ref.set(data);
  },
  signin: () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  },
  createAccount: (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  },
  signinAccount: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{

    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getToken().then(function(idToken) {
            console.log(idToken);
        });
      }
    });
  }

}
