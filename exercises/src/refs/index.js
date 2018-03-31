import React from 'react'
import MeasureText from './MeasureText'

export default class RefsExample extends React.Component {
  render() {
    return (
      <div>
        <p><strong>Get the widht and height of the div contaning lorem ipsum text in MeasureText
          component and set it in the state of the component.</strong></p>
        <p><strong>Hint: calling getBoundingClientRect on a DOM node returns it dimensions</strong></p>
        <hr />
        <MeasureText />
      </div>
    )
  }
}
