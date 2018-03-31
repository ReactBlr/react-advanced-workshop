import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PerformanceOptimizations from "./performance-optimizations";
import RefsExample from './refs'
import HOC from './component-patterns/hoc'
import Portals from './portals/01-using-modals/src/App'
import ErrorBoundaries from "./error-boundaries";
import { Provider } from 'react-redux'
import { createStore } from "redux";

import reducer from "./testing-react-component/components/CounterStore/reducer";

const store = createStore(reducer)

function Home() {
  return <h1>Advanced React Workshop</h1>
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="sidebar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/hoc">HOC</Link>
                </li>
                <li>
                  <Link to="/portals">Portals</Link>
                </li>
                <li>
                  <Link to="/refs">Refs</Link>
                </li>
                <li>
                  <Link to="/performance-optimizations">Perfromance optimizations</Link>
                </li>
                <li>
                  <Link to="/error-boundaries">Error Boundaries</Link>
                </li>
              </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/hoc" component={HOC} />
              <Route path="/portals" component={Portals} />
              <Route path="/performance-optimizations" component={PerformanceOptimizations} />
              <Route path="/error-boundaries" component={ErrorBoundaries} />
              <Route path="/refs" component={RefsExample} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
