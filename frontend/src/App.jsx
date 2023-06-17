import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './shared/constants';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About/containers';
import Auth from './pages/Auth/containers';
import Layout from './shared/components/Layout';
import Meettheteam from './pages/MeetTheTeam/containers';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path={ROUTES.root} element={<Home />} />
            <Route path={ROUTES.auth} element={<Auth />} />
            <Route path={ROUTES.dashboard} element={<Dashboard />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.meettheteam} element={<Meettheteam />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
