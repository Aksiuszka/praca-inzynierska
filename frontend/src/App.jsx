import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './shared/constants';
import Home from './pages/Home';
import { TestDashboardContainer as Dashboard } from './pages/Dashboard/containers/TestDashboard';
import { AboutContainer as About } from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Layout from './shared/components/Layouts/MainLayout';
import Meettheteam from './pages/MeetTheTeam';
import Privacy from './pages/Privacy';
import {
  PrescreeningContainer as Prescreening,
  PetTestContainer as PetTest,
  SmartTestContainer as SmartTest,
} from './pages/Prescreening';
import { ReviewContainer as Review } from './pages/Prescreening/containers/ReviewContainer';

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
            <Route path={ROUTES.prescreening} element={<Prescreening />} />
            <Route path={ROUTES.petTest} element={<PetTest />} />
            <Route path={ROUTES.smartTest} element={<SmartTest />} />
            <Route path={ROUTES.review} element={<Review />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
