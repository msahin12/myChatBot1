import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../index.css";

const otherFontTheme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#ee6e73",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#ee6e73",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const myAvatar =
  "data:image/png;base64,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";

let myProps = {
  floating: true,
  botAvatar: myAvatar,
  headerTitle: "Welcome to Talent Envoy!"
};

const steps = [
  {
    id: "1",
    message: "Welcome, What is your name?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    trigger: "4"
  },
  {
    id: "4",
    message: "Good Bye!!",
    end: true
  }
];

class MyChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: steps
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <p>{JSON.stringify(steps[0], null, '\t')}</p>
          <p>{JSON.stringify(steps[1], null, '\t')}</p>
          <p>{JSON.stringify(steps[2], null, '\t')}</p>
          <p>{JSON.stringify(steps[3], null, '\t')}</p>

        </div>
        <ThemeProvider theme={otherFontTheme}>
          <ChatBot {...myProps} steps={this.state.steps} />
        </ThemeProvider>
      </div>
    );
  }
}

export default MyChatBot;
