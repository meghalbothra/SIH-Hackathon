import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostGigPage from './pages/PostGig';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/PostGig" element={<PostGigPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
