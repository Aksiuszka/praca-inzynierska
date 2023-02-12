import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Logo from '../../assets/svg/Logo';

const LogoContainer = () => {
  return (
    <Link to={ROUTES.root}>
      <Logo />
    </Link>
  );
};
export default LogoContainer;
