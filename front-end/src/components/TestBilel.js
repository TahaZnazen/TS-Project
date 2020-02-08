import React, { Component } from "react";

import socketIOClient from "socket.io-client";

class TestBilel extends Component {
  state = {
    endpoint: "http://127.0.0.1:8080",
    response: "",
    Companyid: 123
  };
  /* componentDidMount() {
    console.log(socketIOClient);
    //const { endpoint } = this.state;
    const socket = socketIOClient(this.state.endpoint);
    console.log(socket);

    socket.on("test", data => this.setState({ response: data }));
    /* socketIOClient.on("test", function(socket) {
      socket.on("chat message", function(msg) {
        console.log("message: " + msg);
      });
    }); 
  } /*  */
  testEvent = () => {
    const socket = socketIOClient(this.state.endpoint);
    console.log(socket);
    let data = [{ id: "companyId", job_id: "job id", data: 1222 }];
    socket.emit("getNotification", data);

    //receiving message from server socket
    socket.on("getNotification", data => {
      console.log(data);
    });
  };
  sendMessage = e => {
    e.preventDefault();
    console.log(e.target.message.value);
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("send message", e.target.message.value);
  };

  checkCv = () => {
    let checked = true;
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("check profile", checked, this.state.Companyid);
  };

  render() {
    return (
      <div>
        <button onClick={this.testEvent}> Accept </button>
        <button onClick={this.testEvent2}> Reject </button>
        test component socket io
        <div>
          <form onSubmit={this.sendMessage}>
            <input type="text" id="message" />
            <button type="submit"> send message </button>
          </form>
        </div>
        <a href={`${this.state.endpoint}/cv`}>
          <div onMouseEnter={this.checkCv}> user profile </div>
        </a>
      </div>
    );
  }
}

export default TestBilel;
