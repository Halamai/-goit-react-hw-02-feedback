import React from "react";
import PropTypes from "prop-types";

const Statistic = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <h2 className="titleStatistic">Statistics</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
      </ul>
    </>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistic;
