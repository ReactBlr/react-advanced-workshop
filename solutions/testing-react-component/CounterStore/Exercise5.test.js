import React from 'react'
import { shallow } from 'enzyme'
import { counterIncrement, counterDecrement } from './actions'

import { Counter } from './index'

describe('Counter component connected with redux store', () => {
  
  // A sample test
  it('should renders the count', () => {
    const props = {
      dispatch: jest.fn(),
      count: 1
    }

    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.find('.count').text()).toEqual('1')
  })

  it('dispatches the right action for incrementing', () => {
    const props = {
      dispatch: jest.fn(),
      count: 3
    }

    const wrapper = shallow(<Counter {...props} />);
    wrapper.find('Button.increment').simulate('click')

    expect(props.dispatch).toHaveBeenCalledWith(counterIncrement())
  })

  it('dispatches the right action for decrementing', () => {
    const props = {
      dispatch: jest.fn(),
      count: 3
    }

    const wrapper = shallow(<Counter {...props} />)
    wrapper.find('Button.decrement').simulate('click')

    expect(props.dispatch).toHaveBeenCalledWith(counterDecrement())
  })
})
