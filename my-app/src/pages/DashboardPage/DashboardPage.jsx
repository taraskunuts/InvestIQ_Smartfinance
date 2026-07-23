import React from 'react';
import '../../index.css';

import { Routes, Route } from 'react-router-dom';
import Header from '../../components/shared/Header/Header';
import Modal from '../../components/shared/Modal/Modal';
import BalanceCard from '../../components/dashboard/BalanceCard/BalanceCard';
import TransactionForm from '../../components/dashboard/TransactionForm/TransactionForm';
import TransactionTable from '../../components/dashboard/TransactionTable/TransactionTable';
import DeleteModal from '../../components/dashboard/DeleteModal/DeleteModal';
import SummaryWidget from '../../components/dashboard/SummaryWidget/SummaryWidget';
import './DashboardPage.css';

function DashboardPage() {
    return (
        <div className="dashboard-page">
            <Header />
            <BalanceCard />

            <div className="white-board-container">
                <div className="form-row-section">
                    <TransactionForm />
                </div>
                
                <div className="data-row-section">
                    <div className="table-zone">
                        <TransactionTable />
                    </div>
                    <div className="summary-zone">
                        <SummaryWidget />
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
