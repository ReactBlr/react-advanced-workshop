import React from "react";

/**
 * Utility to calculate the display name of a React Component.
 */
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

/**
 * HOC
 */
const logProps = WrappedComponent => {
  class LogProps extends React.Component {
    componentDidUpdate = prevProps => {
      console.group("props logger");
      console.log("old props:", prevProps);
      console.log("new props", this.props);
      console.groupEnd("props logger");
    };
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  LogProps.displayName = `LogProps(${getDisplayName(WrappedComponent)})`;
  return LogProps;
};

/**
 * Display current count from props
 */
class ChildComponent extends React.Component {
  render() {
    return <div>{this.props.count}</div>;
  }
}

/**
 * Enhance the child Component
 */
const WithLog = logProps(ChildComponent);

/**
 * A React class with counter, which increments on press of a button.
 * It passes the current count to its child
 */
class Coounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <WithLog count={this.state.count} />
      </div>
    );
  }
}

export default Coounter;
