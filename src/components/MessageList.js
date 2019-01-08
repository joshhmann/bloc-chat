import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
      sentAt: "",
      roomId: "",
      messages: []
    }
    this.MessagesRef = this.props.firebase.database().ref('messages');
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  render() {
    return (
      <div />
    );
  }
}
