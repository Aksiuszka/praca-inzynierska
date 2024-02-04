import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as CookieConsent from 'vanilla-cookieconsent';
import { ROUTES } from './shared/constants';
import Home from './pages/Home';
import { TestDashboardContainer as Dashboard } from './pages/Dashboard/containers/TestDashboard';
import { UserDashboardContainer as UserDashboard } from './pages/Dashboard/containers/UserDashboard';
import { InstitutionDashboardContainer as InstitutionDashboard } from './pages/Dashboard';
import { AboutContainer as About } from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Layout from './shared/components/Layouts/MainLayout';
import Meettheteam from './pages/MeetTheTeam';
import Privacy from './pages/Privacy';
import { Stories } from './pages/Stories';
import {
  PrescreeningContainer as Prescreening,
  PetTestContainer as PetTest,
  SmartTestContainer as SmartTest,
  ResultContainer as Result,
} from './pages/Prescreening';
import { ReviewContainer as Review } from './pages/Prescreening/containers/ReviewContainer';
import Login from './pages/Auth/components/Login';
import ForgotPassword from './pages/Auth/components/ForgotPassword/ForgotPassword';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const App = () => {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {},
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description: 'Cookie modal description',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage Individual preferences',
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              sections: [
                {
                  title: 'Somebody said ... cookies?',
                  description: 'I want one!',
                },
                {
                  title: 'Strictly Necessary cookies',
                  description:
                    'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                  linkedCategory: 'necessary',
                },
                {
                  title: 'Performance and Analytics',
                  description:
                    'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'More information',
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                },
              ],
            },
          },
        },
      },
    });
  }, []);
  return (
    <Router>
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
          <Route path={ROUTES.result} element={<Result />} />
          <Route path={ROUTES.profile} element={<UserDashboard />} />
          <Route path={ROUTES.stories} element={<Stories />} />
          <Route path={ROUTES.userDashboard} element={<UserDashboard />} />
          <Route path={ROUTES.institutionDashboard} element={<InstitutionDashboard />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.resetPassword} element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
