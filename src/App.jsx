import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Navigators from './pages/Navigators';
import MedicalTravel from './pages/MedicalTravel';
import Procedures from './pages/Procedures';
import ProcedureDetailStub from './pages/ProcedureDetailStub';
import Library from './pages/Library';
import LibraryDetailStub from './pages/LibraryDetailStub';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="navigators" element={<Navigators />} />
          <Route path="medical-travel" element={<MedicalTravel />} />
          <Route path="procedures" element={<Procedures />} />
          <Route path="procedures/:slug" element={<ProcedureDetailStub />} />
          <Route path="library" element={<Library />} />
          <Route path="library/:slug" element={<LibraryDetailStub />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
