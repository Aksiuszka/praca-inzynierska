import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './shared/constants';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { AboutContainer as About } from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Layout from './shared/components/Layouts/MainLayout';
import Meettheteam from './pages/MeetTheTeam';
import Privacy from './pages/Privacy';

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
            <Route path={ROUTES.privacy} element={<Privacy />} />
            <Route path={ROUTES.contact} element={<Contact />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
