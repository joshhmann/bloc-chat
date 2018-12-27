import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
