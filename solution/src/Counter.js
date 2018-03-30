import React, { Component, Fragment } from "react";
import superExpensiveFunction from "./utils/superExpensiveFunction";

class Counter extends Component {
  static buttonStyle = {
    padding: "5px"
  };
  state = {
    count: 0,
    timestamp: Date.now()
  };

  increment = prevState => ({
    count: prevState.count + 1
  });

  handleCounterClick = () => {
    this.setState(this.increment);
  };

  handleDummyOperationClick = () => {
    this.setState({
      timestamp: Date.now()
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Component should update only when value of count in state changes.
    const countUpdated = nextState.count !== this.state.count;
    console.log("shouldComponentUpdate", countUpdated);
    return countUpdated;
  }

  render() {
    const { count } = this.state;
    const calculatedCount = superExpensiveFunction(count);
    return (
      <Fragment>
        <div>Clicks: {calculatedCount}</div>
        <div style={Counter.buttonStyle}>
          <button onClick={this.handleCounterClick}>Increment</button>
        </div>
        <div style={Counter.buttonStyle}>
          <button onClick={this.handleDummyOperationClick}>Dummy</button>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
