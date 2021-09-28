import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions.js";
import Notification from "../notification/Notification.js";
import Statistics from "../statistic/Statistic.js";

class Section extends Component {
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
    const { title } = this.props;
    const total = this.countTotalFeedback();
    return (
      <div>
        <h1 className="titleFitback">{title}</h1>
        {Object.keys(this.state).map((item) => {
          return (
            <FeedbackOptions
              onLeaveFeedback={this.changeState}
              options={item}
            />
          );
        })}
        <hr />

        {total ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Section;
