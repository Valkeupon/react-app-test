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
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// let authdata = firebase.auth().currentUser;
export let provider = new firebase.auth.GoogleAuthProvider();
export let auth = firebase.auth();

export default {
  getDatas: (params, key, val) => {
    ref = firebase.database().ref(params);
    let array = [];

    return new Promise((resolve, reject) => {
      if(!key && !val){
        return ref.on("value", function(snapshot) {
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
      }
      return ref.orderByChild(key).equalTo(val).on("child_added", function(snapshot){
         const data = snapshot.val();
         const keySnap = snapshot.key;
         if(!data){
           reject(data);
         }

         data._id = keySnap;
         array.push(data);

         resolve(array);

         }, function (error) {
          console.log("Error: " + error.code);
       });
    });
  },
  getOneData: (params, id) => {
    ref = firebase.database().ref(params);

    return new Promise((resolve, reject) => {
      return ref.child(id).on("value", function(snapshot) {
        const data = snapshot.val();
        const keySnap = snapshot.key;
        if(!data){
          reject(data);
        }

        data._id = keySnap;
        resolve(data);

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
  updateDatas: (data, callback) => {
    ref = firebase.database().ref("Dates/" + data._id);
    ref.set(data);
    if(callback){
      callback();
    }
  },
  deleteDatas: (data) => {
    ref = firebase.database().ref("Dates/" + data._id);
    data.archived = true;
    ref.set(data);
  },
  validDates: (data, callback) => {
    ref = firebase.database().ref("Dates/" + data._id);
    data.status = "valid";
    ref.set(data);
    if(callback){
      callback();
    }
  },
  signinAccount: (callback) => {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      if(callback){
        callback(user);
      }
      return;
    });
  }

}
