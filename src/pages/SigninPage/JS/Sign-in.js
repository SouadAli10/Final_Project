import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Form1 from "./Form1";
import Form2 from "./Form2";
import formDataToObject from "./formDataToObject";
import "../Style/style.css";
const Shower = ({ data }) => (
  <div className="Modal">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

const forms = [Form1, Form2, Shower];

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: -1,
      data: {}
    };
  }
  componentDidMount() {
    this.setState({ steps: 0 });
  }
  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const formData = formDataToObject(new FormData(form));

    const steps = this.state.steps + 1;
    const data = { ...this.state.data, ...formData };
    this.setState({ data, steps });
    if (steps === 2) {
      this.props.onSubmit(data);
    }
  };
  render() {
    var child;
    var Comp = forms[this.state.steps];
    if (Comp) {
      child = <Comp onSubmit={this.handleSubmit} data={this.state.data} />;
    }
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Sign;
