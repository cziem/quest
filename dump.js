import React, { Component } from "react";
// import ActivityPane from "./ActivityPane";

export default class Dashboard extends Component {
  state = {
    message: "",
    error: ""
  };

  handleChange = e => {
    let { message } = this.state;

    const messageValue = e.target.value;

    message = messageValue;

    this.setState(() => ({ message }));
  };

  handleMessage = e => {
    e.preventDefault();

    let { message } = this.state;

    if (message === "") {
      this.setState(() => ({
        error: "Message cannot be left empty"
      }));
    } else {
      fetch("http://localhost:3001/server", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json"
        },
        body: JSON.stringify({
          message
        })
      })
        .then(response => { return response.json() } )
        .then((res) => {

          if (res.message !== 'empty') {
            console.log(res.message)
            this.setState(() => ({
              message: ""
            }));
            // {
            //   <p>{}</p>;
            // }
          }
        })
        .catch(err => console.log("An error occurred", err));
    }
  };

  render() {
    let { message } = this.state;

    return (
      <div style={style.dashboard}>
        {/* Activity Panel */}
        {/* <ActivityPane /> */}
        <form onSubmit={this.handleMessage}>
          <input
            type="text"
            name="message"
            placeholder="Write a message..."
            onChange={this.handleChange}
            value={message}
          />
          <button>Send Now</button>
          {<p>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

const style = {
  dashboard: {
    // marginTop: '-1.2rem', // FIXME
    padding: "3rem", // FIXME
    height: "100vh",
    width: "100%"
  }
};
