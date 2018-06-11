import React from "react";
import { render } from "react-dom";
import Log from "./LoginPage/JS/Log-in";
import "./SigninPage/Style/style.css";

class Log_in extends React.Component {
  state = {
    user: null
  };
  onSubmit = user => {
    this.setState({ user });
  };
  render() {
    const is_registered = this.state.user;
    return (
      <div>
        {is_registered ? (
          <div>{this.state.user.username}</div>
        ) : (
          <Log onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}
export default Log_in;
