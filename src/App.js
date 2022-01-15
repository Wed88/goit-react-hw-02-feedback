import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  appendGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  appendNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  appendBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return total ? Math.round((this.state.good * 100) / total) : 0;
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button type="button" onClick={this.appendGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.appendNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.appendBad}>
              Bad
            </button>
          </li>
        </ul>
        <div>
          <h3>Statistics</h3>
          <ul>
            <li>
              <p>Good: {this.state.good}</p>
            </li>
            <li>
              <p>Neutral: {this.state.neutral}</p>
            </li>
            <li>
              <p>Bad: {this.state.bad}</p>
            </li>
            <li>
              <p>Total: {total}</p>
            </li>
            <li>
              <p>
                Positive feedback: {this.countPositiveFeedbackPercentage(total)}
                %
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
