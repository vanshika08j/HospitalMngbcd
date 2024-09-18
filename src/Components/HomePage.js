import './Home.css';
import React from 'react'
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to the Hospital Management System</h1>

      <p>Manage all your hospital data efficiently with our system.</p>
    

<div className='home-links'>
  <Link to='/patients'>Manage Patients</Link>
  <Link to='/doctors'>Manage Doctors</Link>
  <Link to='/appointments'>Manage appointments</Link>
</div>
</div>
  );
};

export default HomePage;