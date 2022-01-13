import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  appendGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  appendNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  appendBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
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
              <p>Good:{this.state.good}</p>
            </li>
            <li>
              <p>Neutral:{this.state.neutral}</p>
            </li>
            <li>
              <p>Bad:{this.state.bad}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
