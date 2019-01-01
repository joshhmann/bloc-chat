import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC71AskW9FcL46lkUhZC_9jKUL2HDPjvyA",
  authDomain: "bloc-chat-4708d.firebaseapp.com",
  databaseURL: "https://bloc-chat-4708d.firebaseio.com",
  projectId: "bloc-chat-4708d",
  storageBucket: "bloc-chat-4708d.appspot.com",
  messagingSenderId: "42802058630"
};
firebase.initializeApp(config);


class App extends Component {

  render() {
    return (
      <div>
      <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
