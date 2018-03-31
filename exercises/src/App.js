import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PerformanceOptimizations from './performance-optimizations'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="sidebar">
            <ul>
              <li><Link to='/'>Refs</Link></li>
              <li><Link to='/performance-optimizations'>perfromance optimizations</Link></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path='/' component={PerformanceOptimizations} />
            <Route path='/performance-optimizations' component={PerformanceOptimizations} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
