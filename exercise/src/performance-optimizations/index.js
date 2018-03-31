import React from "react";
import Counter from "./Counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <p>Implement shouldComponentUpdate in Counter to avoid unnecessary re-renders.</p>
    <Counter />
  </div>
);

export default App
