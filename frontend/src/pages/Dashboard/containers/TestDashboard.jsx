import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LinkBox } from '../styles/style';
import { WrapContainer } from '../../../shared/styles/styles';
import { AVAILABLE_TESTS } from '../../../shared/constants';

export const TestDashboardContainer = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <WrapContainer>
      {AVAILABLE_TESTS.map((test, index) => (
        <LinkBox key={test.title} index={index} onClick={() => handleClick(test.route)}>
          <Typography variant='decorated'>{test.title}</Typography>
        </LinkBox>
      ))}
    </WrapContainer>
  );
};
