import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  './Patient.css';
const PatientPage = () => {

  const[patients,setPatients]=useState([]);

  const[formData,setFormData]=useState({name:'',age:'',gender:'',    phone: '',
    email: '',
    address: '',
    medicalHistory: ''
});

  useEffect(()=>{
    fetchPatients();
  },[]);

  const fetchPatients=async()=>{
    try{
      const response=await axios.get('/api/patients',console.error);
      setPatients(response.data);
    }
    catch(error){
      console.error('Error Fetching patients:',error);
    }
      
    };
  

  const handleInputChange=(event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});

  };

  const addPatient=async(event)=>{
    event.preventDefault();
    try{
      await axios.post('/api/patients',formData);
      fetchPatients();
      setFormData({name:'',age:'',gender:'',phone:''
        ,email:'',address:'',medicalHistory:''
      });
    }
    catch(error){
console.error('Error adding patient:',error);
    }
  };

  const deletePatient=async(id)=>{
    try{
      await axios.delete('/api/patients/${id}');
      fetchPatients();
    }
    catch(error){
console.error('Error deleting patient:',error);
    }
  }
  return (
<div className='patient-management'>
  <h2>Patient Management</h2>
  <form onSubmit={addPatient}>
    <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleInputChange} required/>
    <input type='number' name='age' placeholder='Age' value={formData.age} onChange={handleInputChange} required/>
    <input type='text' name='gender' placeholder='Gender' value={formData.gender} onChange={handleInputChange} required/>
    <input type='text' name='phone' placeholder='Phone' value={formData.phone}  onChange={handleInputChange}required/>
    <input type='email' name='email'placeholder='Email' value={formData.email} onChange={handleInputChange} required/>
    <input type='address' name='address' placeholder='Address' value={formData.address} onChange={handleInputChange} required/>
    <textarea type='medicalHistory' name='medicalHistory' placeholder='Medical History if any?' value={formData.medicalHistory}onChange={handleInputChange}></textarea>
    <button type='submit' >Add Patient</button>
  </form>

  <ul>
    {patients.map((patient)=>(
      <li key={patient.id}>
        {patient.name}-{patient.age}-{patient.gender}-{patient.phone}-{patient.email}-{patient.address}-{patient.medicalHistory}
      <button onClick={()=> deletePatient(patient.id)}>Delete</button>

      
      </li>
    ))}
  </ul>
</div>  );
};

export default PatientPage;