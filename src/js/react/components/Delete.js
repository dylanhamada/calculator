import React from "react";
import { connect } from "react-redux";
import { delVal } from "./../../redux/actions";
import "../../../css/App.css";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.delVal();
  }

  render() {
    return (
      <div id="delete" onClick={this.handleClick}>
        <span>Delete</span>
      </div>
    );
  }
}

export default connect(
  null,
  { delVal }
)(Delete);
