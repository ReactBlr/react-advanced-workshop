import React, { Component } from "react";
import { connect } from "react-redux";
import { counterIncrement, counterDecrement } from "./actions";
import Button from "../Button";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.dispatch(counterIncrement());
  };

  decrement() {
    this.props.dispatch(counterDecrement());
  };
  
  render() {
    return (
      <div className="counter-card">
        <h2 className="count">{this.props.count}</h2>
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

const mapStateToProps = (state) => ({
  count: state.count,
})

export default connect(mapStateToProps, {
  counterIncrement,
  counterDecrement
})(Counter)