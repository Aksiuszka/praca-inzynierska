import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Div2 } from './styled';

export const Div = styled('div')`
  border: 2px solid red;
  font-family: Futura;
`;
const Test = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    return setCounter(counter + 1);
  };
  return (
    <>
      <p>Hello React</p>
      <Div>Test czcionki</Div>
      <Div2 />
      <Typography variant='highlighted'>Highlighted ..</Typography>
      <Typography variant='regular'>regular ...</Typography>
      <Typography variant='display'>display...</Typography>
      <div>{counter}</div>
      <button type='button' onClick={add}>
        add
      </button>
    </>
  );
};

export default Test;
