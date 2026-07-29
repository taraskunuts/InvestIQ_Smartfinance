import React, { useState } from 'react';
import '../../index.css';

import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Header from '../../components/shared/Header/Header';
import Modal from '../../components/shared/Modal/Modal';
import BalanceCard from '../../components/dashboard/BalanceCard/BalanceCard';
import TransactionForm from '../../components/dashboard/TransactionForm/TransactionForm';
import TransactionTable from '../../components/dashboard/TransactionTable/TransactionTable';
import DeleteModal from '../../components/dashboard/DeleteModal/DeleteModal';
import SummaryWidget from '../../components/dashboard/SummaryWidget/SummaryWidget';
import './DashboardPage.css';

function DashboardPage() {
    const [transactionType, setTransactionType] = useState('expense');
    const navigate = useNavigate(); 

    const handleDeleteTransaction = (id) => {
        navigate(`delete/${id}`); 
    };

    return (
        <div className="dashboard-page">
            <Header />
            <BalanceCard />

            <div className="dashboard-content-container">
         
                <div className="type-toggle-container">
                    <button 
                        type="button"
                        className={`toggle-btn expense-tab ${transactionType === 'expense' ? 'active' : ''}`}
                        onClick={() => setTransactionType('expense')}
                    >
                        ВИТРАТИ
                    </button>
                    <button 
                        type="button"
                        className={`toggle-btn income-tab ${transactionType === 'income' ? 'active' : ''}`}
                        onClick={() => setTransactionType('income')}
                    >
                        ДОХІД
                    </button>
                </div>

                
                <div className="white-board-container">
                    <div className="form-row-section">
                     
                        <TransactionForm type={transactionType} />
                    </div>
                    
                    <div className="data-row-section">
                        <div className="table-zone">
                           <TransactionTable onDeleteClick={handleDeleteTransaction} />
                        </div>
                        <div className="summary-zone">
                            <SummaryWidget />
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="logout" element={<Modal />} />
                <Route path="/delete/:id" element={<DeleteModal />} />
            </Routes>
        </div>
    );
}

export default DashboardPage;
