import React from "react";
import "../../../css/App.css";

class Operator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id={this.props.id}>{this.props.text}</div>;
  }
}

export default Operator;
