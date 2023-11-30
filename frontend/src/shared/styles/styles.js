import { Grid, styled } from '@mui/material';

export const WrapContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const RightButtonContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: end;
  align-items: end;
  gap: 2rem;
`;

export const ColumnContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const LeftColumnContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4rem;
`;

export const CustomGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: 5rem;
  border-radius: 2rem;
  background-color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return '#EAEFFF';
      case 'red':
        return '#FAF3F6';
      case 'green':
        return 'green';
      case 'yellow':
        return 'yellow';
      default:
        return 'transparent';
    }
  }};
`;

export const CustomBall = styled('div')`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.color) {
      case 'red':
        return '#F379A1';
      case 'green':
        return '#DDF3E7';
      case 'yellow':
        return '#FFE7BE';
      default:
        return 'blue';
    }
  }};
`;
