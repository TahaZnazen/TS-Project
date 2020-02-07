import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class TestBilel2 extends Component {
  state = {
    endpoint: "http://127.0.0.1:8080",
    notificationData: [],
    receivedMessage: []
  };
  show = () => {
    console.log(this.state);
  };
  componentWillMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("getNotification", data => {
      console.log("hi", data);
      let newData = this.state.notificationData;
      newData.push(data);
      this.setState({ notificationData: newData });
    });
    socket.on("receive message", message => {
      console.log(message);
      const messages = this.state.receivedMessage;
      messages.push(message);
      this.setState({ receivedMessage: messages });
      console.log(this.state);
    });

    socket.on("check", (check, id) => {
      console.log(check);
      console.log("hello company with id", id);
      console.log(socket.id);
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.show}>notification</button>
        <h3> user profile </h3>
        <h4>notification : {this.state.notificationData.length}</h4>
        <h4> receivedMessage : </h4>
        {this.state.receivedMessage.map(el => {
          return <li>{el}</li>;
        })}
      </div>
    );
  }
}

export default TestBilel2;
