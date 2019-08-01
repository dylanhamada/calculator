import React from "react";
import { connect } from "react-redux";
import "../../../css/App.css";

const mapStateToProps = state => {
  return {
    display: state.currentNum
  };
};

class Display extends React.Component {
  render() {
    /* Truncates value or expression displayed if too long */
    let fullDisplay = this.props.display.join("");
    let truncDisplay =
      fullDisplay.length > 27
        ? fullDisplay.slice(fullDisplay.length - 27, fullDisplay.length - 1)
        : fullDisplay;

    return (
      <div id="display">
        <span>{truncDisplay}</span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Display);
