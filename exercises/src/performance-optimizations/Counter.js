import React, { Component, Fragment } from "react";
import Count from "./Count";
import superExpensiveFunction from "./utils/superExpensiveFunction";

class Counter extends Component {
  state = {
    count: 0,
    timestamp: Date.now()
  };

  increment = prevState => ({
    count: prevState.count + 1
  });

  decrement = prevState => ({
    count: prevState.count - 1
  });

  handleIncrementClick = () => {
    if (this.state.count < 10) {
      this.setState(this.increment);
    }
  };

  handleDecrementClick = () => {
    if(this.state.count > 0) {
      this.setState(this.decrement);
    }
  };

  handleDummyOperationClick = () => {
    this.setState({
      timestamp: Date.now()
    });
  };

  // Implement shouldComponentUpdate to avoid unnecessary re-renders.
  // shouldComponentUpdate(nextProps, nextState) {
  // }

  render() {
    const { count } = this.state;
    const calculatedCount = superExpensiveFunction(count);
    return (
      <Fragment>
        <Count
          onIncrement={ this.handleIncrementClick }
          onDecrement={ this.handleDecrementClick }
          value={ calculatedCount }
        />
        <button className="Counter__button" onClick={this.handleDummyOperationClick}>Dummy</button>
      </Fragment>
    );
  }
}

export default Counter;
