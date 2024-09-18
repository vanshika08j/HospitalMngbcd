import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import PatientPage from './Components/PatientPage';
import AppointmentPage from './Components/AppointmentPage';
import DoctorPage from './Components/DoctorPage';
import DepartmentPage from './Components/DepartmentPage';
import MedicalHistoryPage from './Components/MedicalHistoryPage';
import UserPage from './Components/Userpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/patients" element={<PatientPage/>}></Route>
        <Route path="/doctors" element={<DoctorPage/>}></Route>
        <Route path="/medical-history" element={<MedicalHistoryPage/>}></Route>
        <Route path="/appointments" element={<AppointmentPage/>}></Route>
        <Route path="/departments" element={<DepartmentPage/>}></Route>
        <Route path="/user" element={<UserPage/>}></Route>

      </Routes>
    </Router>
  );
};

export default App