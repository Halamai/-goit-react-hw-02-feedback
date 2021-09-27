import React, { Component } from "react";
class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = (e) => {
    const name = e.target.name;
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    const positiveFeedback = sum ? (this.state.good / sum) * 100 : 0;
    return Number(positiveFeedback).toFixed(0);
  };
  render() {
    return (
      <div>
        <h2 className="titleFitback">Please leave feedback</h2>
        <button type="button" name="good" onClick={this.changeState}>
          good
        </button>
        <button type="button" name="neutral" onClick={this.changeState}>
          neutral
        </button>
        <button type="button" name="bad" onClick={this.changeState}>
          bad
        </button>
        <hr />
        <h2 className="titleStatistic">Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{this.countTotalFeedback()}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Statistic;
