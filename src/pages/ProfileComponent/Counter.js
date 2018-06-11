import React from "react";
export default class Counter extends React.Component {
  constructor(properties) {
    super(properties);
    let start = 0;
    if (properties.start) {
      start = properties.start;
    }
    this.state = { counter: start };
  }
  increment() {
    var counter = this.state.counter + 1;
    this.setState({ counter });
  }
  decrement() {
    var counter = this.state.counter - 1;
    this.setState({ counter });
  }
  render() {
    return (
      <div className="tab_button">
        {this.props.name}
        <button onClick={() => this.increment()}>+</button>
        {this.state.counter}
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}
