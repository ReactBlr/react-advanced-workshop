import React from "react";
import Counter from "./Counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  padding: "40px 120px 0"
};

const PerformanceOptimizationExample = () => (
  <div style={styles}>
    <b>Implement shouldComponentUpdate in Counter & Count components to avoid unnecessary re-renders.</b>
    <Counter />
  </div>
);

export default PerformanceOptimizationExample;
