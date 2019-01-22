import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.signInWithPopup = this.signInWithPopup.bind(this);
    this.signOut = this.signOut.bind(this);

  }

  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  render() {
    return(
      <div>
      <div> {this.props.user}</div>
        <button onClick={this.signInWithPopup}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default User;
