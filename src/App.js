import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage'
import AppLayout from './components/AppLayout';


function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
