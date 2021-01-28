import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from "./actions";

const INITIAL_STATE = { count: 0 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count : state.count + 1,
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count : state.count - 1,
      }
    default:
      return state;
  }
}
