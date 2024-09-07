import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostGigPage from './pages/PostGig';
import AcceptGigPage from './pages/AcceptGig';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/PostGig" element={<PostGigPage />} />
          <Route path="/AcceptGig" element={<AcceptGigPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
