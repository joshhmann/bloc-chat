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
    this.messagesRef = this.props.firebase.database().ref('messages');
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      username: "user",
      content: e.target.value,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom
    });
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key
      this.setState({ messages: this.state.messages.concat( message ) });
    });
  }

  render() {
    const activeRoom = this.props.activeRoom;


    const messageList = (
      this.state.messages.map((message) => {
        if(message.roomId === activeRoom) {
          return <li key={message.key}>{message.content}</li>
        }
        return null;
      })
    );

    return (
      <div>
      <div>{messageList}</div>
      </div>
    );
  }
}

export default MessageList;
