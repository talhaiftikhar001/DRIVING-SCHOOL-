import React from 'react';
import './Dashboard.css'; // Optional: for custom styling
import iqra from '../Assets/iqra.png';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header-line">
        <span className="header-title">Dashboard</span>
      </div>
      <h2>IQRA Driving School Management System</h2>
      <div className="dashboard-welcome">
        Welcome Back Admin User
      </div>
      <div className="dashboard-cards">
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <p>SADAR </p>
        </div>
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <p>GOLRA</p>
        </div>
        <div className="card" style={{ backgroundColor:'blue' }}>
          <p> G-10 </p>
        </div>
        <div className="card" style={{ backgroundColor: 'blue'}}>
          <p> Melody/G6 </p>
        </div>
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <p>Sixth-Road <br />(6TH-ROAD)</p>
        </div>
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <p>Chaklala</p>
        </div>
        <div className="card" style={{ backgroundColor: 'blue' }}>
          <p> Ali Pur </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;