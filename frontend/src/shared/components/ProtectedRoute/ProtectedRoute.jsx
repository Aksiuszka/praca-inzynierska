import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../constants';

export const ProtectedRoute = () => {
  const { email, token } = useSelector((state) => state.auth);

  const isAuthenticated = Boolean(email && token);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />;
};
