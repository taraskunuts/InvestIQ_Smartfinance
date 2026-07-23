import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../../redux/transactions/transactionsSlice.js';
import groupByMonth from '../../../utils/groupByMonth.js';
import formatMoney from '../../../utils/formatMoney.js';
import './SummaryWidget.css';

const SummaryWidget = () => {
    const transactions = useSelector(selectTransactions) || [];
    const summaryData = useMemo(() => {
        return groupByMonth(transactions);

    }, [transactions]);
    return (
        <div className="summary-container">
      <div className="summary-header">
        ЗВЕДЕННЯ
      </div>
     <div className="summary-body">
        {summaryData.map((item,index)=>(
          <div key={index} className="summary-row">
            <span className="summary-month">{item.month.toUpperCase()}</span>
            <span className="summary-amount">
              {formatMoney(item.amount)}
            </span>
          </div>
        ))}
     </div>
        </div>
    )
}
export default SummaryWidget;