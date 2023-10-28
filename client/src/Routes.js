import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddStudent from './pages/AddStudent';
import ViewStudents from './pages/ViewStudents';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ViewStudents />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-students" element={<ViewStudents />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
