import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Input">
        <input
          name={this.props.id}
          id={this.props.id}
          autoComplete="false"
          required
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label htmlFor={this.props.id} />
      </div>
    );
  }
}
