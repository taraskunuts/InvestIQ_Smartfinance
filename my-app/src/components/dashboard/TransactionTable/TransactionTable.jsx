import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../../redux/transactions/transactionsSlice.js';
import TransactionRow from '../TransactionRow/TransactionRow.jsx';
import './TransactionTable.css'; 

const TransactionTable = ({ onDeleteClick }) => {
    const transactions = useSelector(selectTransactions) || [];

    useEffect(() => {
        localStorage.setItem('currentBalance', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="transaction-table-wrapper">
            <table className="transaction-table">
                <thead>
                    <tr className="table-header-row">
                        <th className="table-th text-left">Дата</th>
                        <th className="table-th text-left">Опис</th>
                        <th className="table-th text-center">Категорія</th>
                        <th className="table-th text-center">Сума</th>
                        <th className="table-th"></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="table-empty-cell">
                                Немає транзакцій
                            </td>
                        </tr>
                    ) : (
                        transactions.map((item) => (
                            <TransactionRow 
                                key={item.id} 
                                transaction={item} 
                                onDeleteClick={onDeleteClick} 
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
