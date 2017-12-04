import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
//import Admin from './admin/index.js';
import Login from './login/index.js';
import Home from './home/index.js';
//import * as admin from "firebase-admin";

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: "https://website-kapsul-9a992.firebaseio.com"
// });

var currentUser = firebase.auth().currentUser;
console.log(currentUser);

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/admin/login" component={Login}/>
    </div>
  </Router>
)
export default BasicExample;
