import React from 'react';
import { 
  useCount, 
  useIncrement, 
  useDecrement, 
  useAsyncIncrement 
} from '../state/count';

const Counter = () => {
  const count = useCount();
  const increment = useIncrement();
  const decrement = useDecrement();
  const asyncIncrement = useAsyncIncrement();

  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {count}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => asyncIncrement()}>+ (1 sec)</button>
    </div>
  );
};

export default Counter;