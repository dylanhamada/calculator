import React from "react";
import { connect } from "react-redux";
import { addToExpArr } from "../../redux/actions";
import "../../../css/App.css";

class Operator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addToExpArr(this.props.text);
  }

  render() {
    return (
      <div id={this.props.id} onClick={this.handleClick}>
        {this.props.text}
      </div>
    );
  }
}

export default connect(
  null,
  { addToExpArr }
)(Operator);
