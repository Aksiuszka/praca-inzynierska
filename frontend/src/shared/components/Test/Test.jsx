import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Div2 } from './styled';

export const Div = styled('div')`
  width: 10px;
  height: 10px;
  border: 2px solid red;
`;
const Test = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    return setCounter(counter + 1);
  };
  return (
    <>
      <p>Hello React</p>
      <Div />
      <Div2 />
      <div>{counter}</div>
      <button type='button' onClick={add}>
        add
      </button>
    </>
  );
};

export default Test;
