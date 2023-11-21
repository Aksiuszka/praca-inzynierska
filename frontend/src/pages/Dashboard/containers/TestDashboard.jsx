import { Typography } from '@mui/material';
import { LinkBox } from '../styles/style';
import { WrapContainer } from '../../../shared/styles/styles';
import { AVAILABLE_TESTS } from '../../../shared/constants';

export const TestDashboardContainer = () => {
  return (
    <WrapContainer>
      {AVAILABLE_TESTS.map((test, index) => (
        <LinkBox key={test.title} index={index}>
          <Typography variant='decorated'>{test.title}</Typography>
        </LinkBox>
      ))}
    </WrapContainer>
  );
};
