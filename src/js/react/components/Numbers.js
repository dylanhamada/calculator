import React from "react";
import { connect } from "react-redux";
import { addNum } from "../../redux/actions";
import "../../../css/App.css";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addNum(this.props.val);
  }

  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.handleClick}
        numval={this.props.val}
      >
        <span>{this.props.val}</span>
      </div>
    );
  }
}

export default connect(
  null,
  { addNum }
)(Numbers);
