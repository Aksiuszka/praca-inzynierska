import { useLocation } from 'react-router-dom';

export const ResultContainer = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>werty</div>;
};
