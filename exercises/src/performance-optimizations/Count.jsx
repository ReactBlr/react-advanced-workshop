import React, { Component } from 'react'
import PropTypes from 'prop-types'

import subtractIcon from "./icons/subtract.svg";
import addIcon from "./icons/add.svg";

export default class Count extends Component {
  static propTypes = {
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    value: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.getClassNamesForButton(props);
  }
  getClassNamesForButton = (props) => {
    const { value } = props;
    this.addClassName = value >= 10 ? "Counter__disabled" : "";
    this.subtractClassName = value <= 0 ? "Counter__disabled" : "";
  }
  componentWillReceiveProps(nextProps) {
    this.getClassNamesForButton(nextProps);
  }
  render() {
    const { onDecrement, value, onIncrement } = this.props;
    return (
      <ul className="Counter">
        <li className="Counter__item">
          <div className="Counter__actions">
            <span onClick={ onDecrement } className={ this.subtractClassName }>
              <img src={ subtractIcon } />
            </span>
            <p className="Counter__count">{ value }</p>
            <span onClick={ onIncrement } className={ this.addClassName }>
              <img src={ addIcon } />
            </span>
          </div>
        </li>
      </ul>
    );
  }
}
