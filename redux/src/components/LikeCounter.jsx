import React, { useReducer } from 'react';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const LikeCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unike</button>
    </div>
  );
};

export default LikeCounter;