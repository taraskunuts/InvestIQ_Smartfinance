import React from 'react';
import formatMoney from '../../../utils/formatMoney.js';
import deleteIcon from '../../../assets/icons/delete.svg'; 
import './TransactionRow.css';

const TransactionRow = ({ transaction, onDeleteClick }) => {
  const { id, date, description, category, amount, type } = transaction;

  const isIncome = type === 'income';
  const amountClass = isIncome ? 'row-amount income' : 'row-amount expense';
  const amountSign = isIncome ? `+ ${formatMoney(amount)} грн.` : `- ${formatMoney(amount)} грн.`;

  return (
    <tr className="transaction-table-row">
      <td className="row-date">{date}</td>
      <td className="row-description">{description}</td>
      <td className="row-category">{category}</td>
      <td className={amountClass}>{amountSign}</td>
      <td className="row-actions">
        <button 
          type="button" 
          className="row-delete-btn" 
          onClick={() => onDeleteClick(id)}
          aria-label="Видалити запис"
        >
          <img src={deleteIcon} alt="Кошик" className="delete-icon" />
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
