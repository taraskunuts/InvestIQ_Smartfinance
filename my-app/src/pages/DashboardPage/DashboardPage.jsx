import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from '../../components/shared/Header/Header'; 
import Modal from '../../components/shared/Modal/Modal';   
import BalanceCard from '../../components/dashboard/BalanceCard/BalanceCard';   
import TransactionForm from '../../components/dashboard/TransactionForm/TransactionForm'; 
import TransactionTable from '../../components/dashboard/TransactionTable/TransactionTable';   
import DeleteModal from '../../components/dashboard/DeleteModal/DeleteModal';    
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <Header />
      <BalanceCard />
      
      <div className="white-board-container">
          <TransactionForm />
          <TransactionTable />
      </div>
     
      <Routes>
        <Route path="logout" element={<Modal />} />
        <Route path="/delete/:id" element={<DeleteModal />} />
      </Routes>
    </div>
  );
}

export default DashboardPage;
