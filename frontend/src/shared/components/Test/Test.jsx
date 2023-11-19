import { useState } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    return setCounter(counter + 1);
  };
  return (
    <>
      <p>Hello React</p>
      <div>{counter}</div>
      <button type='button' onClick={add}>
        add
      </button>
    </>
  );
};

export default Test;
