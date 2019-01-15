import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList.js';

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
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room})
  }

  setUser(){

  }

  render() {
    const showMessages = this.state.activeRoom;
    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select a room"}</h1>
      <RoomList firebase={firebase} activeRoom={this.activeRoom} />
      { showMessages ?
      (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
      : (null)
    }
      </div>
    );
  }
}

export default App;
