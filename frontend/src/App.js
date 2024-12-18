import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/terms-of-service';
import Auth from './pages/auth';
import EmailAuth from './pages/emailAuth';
import EmailConfirm from './pages/emailConfirm';
import MoviePage from './pages/moviePage'; // Импорт компонента страницы фильма
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/email" element={<EmailAuth />} />
        <Route path="/email/confirm" element={<EmailConfirm />} />
        <Route path="/movie/:id" element={<MoviePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
