import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginform from './components/Assets/loginform/loginform';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/pages/Dashboard';
import Applications from './components/pages/Applications';
import Packages from './components/pages/packages';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/sidebar/*" element={<SidebarWithRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

function SidebarWithRoutes() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applications" element={<Applications />} />
        <Route path="packages" element={<Packages />} />
        <Route path="*" element={ <Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;