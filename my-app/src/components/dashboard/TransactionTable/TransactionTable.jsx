import React, {useEffect} from 'react';
import '../../../index.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteIcon from '../../../assets/icons/delete.svg';
import { selectTransactions } from '../../../redux/transactions/transactionsSlice.js';
import './TransactionTable.css'; 

const TransactionTable = () => {
    const navigate = useNavigate();
    const transactions = useSelector(selectTransactions) || [];
    useEffect(() => {
        localStorage.setItem('currentBalance', JSON.stringify(transactions))
     },
        [transactions]);
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
                            <tr key={item.id} className="table-body-row">
                                <td className="table-td text-left">{item.date}</td>
                                <td className="table-td text-left">{item.description}</td>
                                <td className="table-td text-center">{item.category}</td>

                                <td className={`table-td text-center font-bold ${item.type === 'income' ? 'color-income' : 'color-expense'}`}>
                                    {item.type === 'income' ? `+${item.amount}.00 грн.` : `-${item.amount}.00 грн.`}
                                </td>

                                <td className="table-td text-right">
                                    <button
                                        type="button"
                                        className="btn-table-delete"
                                        onClick={() => navigate(`delete/${item.id}`)}
                                    >
                                        <img src={deleteIcon} alt="Видалити" className="delete-icon-img" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
