import React from "react";
import "../../../css/App.css";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.num}</span>
      </div>
    );
  }
}

export default Numbers;
