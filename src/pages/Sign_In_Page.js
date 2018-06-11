import React from "react";
import { render } from "react-dom";
import Sign from "./SigninPage/JS/Sign-in";
import "./SigninPage/Style/style.css";

class Sign_in extends React.Component {
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
          <Sign onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}
export default Sign_in;
