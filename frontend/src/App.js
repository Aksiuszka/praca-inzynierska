import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import About from 'pages/About';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={ROUTES.root} element={<Home />} />
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.about} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
