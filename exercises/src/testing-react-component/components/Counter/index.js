import React, { Component } from "react";

import Button from "../Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  
  render() {
    return (
      <div className="counter-card">
        <h2 className="count">{this.state.count}</h2>
        <Button
          className="increment"
          onClick={this.increment}
        >
          Increment
        </Button>
        <Button
          className="decrement"
          onClick={this.decrement}
        >
          Decrement
        </Button>
      </div>
    );
  }
}

export default Counter;