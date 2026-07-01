import React from 'react';


import { Routes, Route } from 'react-router-dom'; 
import Header from '../../components/shared/Header/Header'; 
import Modal from '../../components/shared/Modal/Modal';   
import BalanceCard from '../../components/dashboard/BalanceCard/BalanceCard';   
function DashboardPage() {


  return (
    <div className="dashboard-page">
  
      <Header />
      <BalanceCard/>
     
         <Routes>
      
        <Route path="logout" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default DashboardPage;
