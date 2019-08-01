import React from "react";
import "../../../css/App.css";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.id);
  }

  render() {
    return (
      <div id={this.props.id} onClick={this.handleClick}>
        <span>{this.props.val}</span>
      </div>
    );
  }
}

export default Numbers;
