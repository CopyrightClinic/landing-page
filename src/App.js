import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Terms from './LandingPage/Terms';
import Privacy from './LandingPage/Privacy';
import CheckUser from './LandingPage/CheckUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/check-user" element={<CheckUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
