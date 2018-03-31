export const COUNTER_INCREMENT = '@@Counter/COUNTER_INCREMENT';
export const COUNTER_DECREMENT = '@@Counter/COUNTER_DECREMENT';

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT
});