import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PerformanceOptimizations from "./performance-optimizations";
import ErrorBoundaries from "./error-boundaries";
import { Provider } from 'react-redux'
import { createStore } from "redux";

import reducer from ".testing-react-component/components/CounterStore/reducer";

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="sidebar">
              <ul>
                <li>
                  <Link to="/">Refs</Link>
                </li>
                <li>
                  <Link to="/performance-optimizations">perfromance optimizations</Link>
                </li>
                <li>
                  <Link to="/error-boundaries">Error Boundaries</Link>
                </li>
              </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={PerformanceOptimizations} />
              <Route path="/performance-optimizations" component={PerformanceOptimizations} />
              <Route path="/error-boundaries" component={ErrorBoundaries} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
