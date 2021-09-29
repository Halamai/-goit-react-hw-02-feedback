import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

export default FeedbackOptions;
