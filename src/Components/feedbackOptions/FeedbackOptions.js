import React, { Component } from "react";
import "./FeedbackOptions.css";

export default class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <button
        className="btn"
        type="button"
        name={options}
        onClick={onLeaveFeedback}
      >
        {options}
      </button>
    );
  }
}
