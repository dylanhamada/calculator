import React from "react";
import { connect } from "react-redux";
import "../../../css/App.css";

const mapStateToProps = state => {
  return {
    display: state.expression
  };
};

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="display">
        <span>{this.props.display}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Display);
