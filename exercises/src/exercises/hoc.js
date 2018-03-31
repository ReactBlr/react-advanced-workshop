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
const logProps = WrappedComponent => {};

/**
 * Display current count from props
 */
class ChildComponent extends React.Component {}

/**
 * Enhance the child Component
 */
const WithLog = logProps(ChildComponent);

/**
 * A React class with counter, which increments on press of a button.
 * It passes the current count to its child
 */
class Counter extends React.Component {}

export default Counter;
