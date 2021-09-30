import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map((item) => (
    <button
      key={item}
      className="btn"
      type="button"
      name={item}
      onClick={onLeaveFeedback}
    >
      {item}
    </button>
  ));
};

export default FeedbackOptions;
