import React { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user
    }

  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStatechanged( user => {
      this.props.setUser(user);
    })
  }

  signInWithPopup() {
    const provider = new this.props.firebase.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signout();
  }




  render() {
    //Create sign-in and signout buttons
    return(
      //return sign in and sign out
    );
  }
}
