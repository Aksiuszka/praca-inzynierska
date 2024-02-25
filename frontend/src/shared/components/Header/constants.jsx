import { ROUTES } from '../../constants';
import Home from '../../assets/icons/Home';
import Dashboard from '../../assets/icons/Dashboard';
import About from '../../assets/icons/About';
import Profile from '../../assets/icons/Profile';
import Logout from '../../assets/icons/Logout';
import FFinder from '../../assets/icons/FFinder';

export const PAGES = [
  { title: 'home', path: ROUTES.root, icon: <Home /> },
  { title: 'fluff finder', path: ROUTES.dashboard, icon: <FFinder /> },
  { title: 'about', path: ROUTES.about, icon: <About /> },
];

export const SETTINGS = [
  { title: 'dashboard', path: ROUTES.dashboardRedirect, icon: <Dashboard /> },
  { title: 'profile', path: ROUTES.profileRedirect, icon: <Profile /> },
  { title: 'logout', path: ROUTES.root, icon: <Logout /> },
];
