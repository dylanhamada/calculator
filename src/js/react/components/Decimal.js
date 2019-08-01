import React from "react";
import { connect } from "react-redux";
import { addDec } from "../../redux/actions";
import "../../../css/App.css";

class Decimal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addDec();
  }

  render() {
    return (
      <div id="decimal" onClick={this.handleClick}>
        <span>.</span>
      </div>
    );
  }
}

export default connect(
  null,
  { addDec }
)(Decimal);
