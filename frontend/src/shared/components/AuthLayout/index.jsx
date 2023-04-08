import { AuthGrid } from './style';

const AuthLayout = ({ children }) => {
  return (
    <AuthGrid container item>
      {children}
    </AuthGrid>
  );
};
export default AuthLayout;
