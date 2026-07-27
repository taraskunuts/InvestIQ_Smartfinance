import "./ReportPage.css";

import { Link } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import MonthSwitcher from "../../components/report/MonthSwitcher/MonthSwitcher";
import CategoryGrid from "../../components/report/CategoryGrid/CategoryGrid";
import BalanceCard from "../../components/dashboard/BalanceCard/BalanceCard";

function ReportPage() {
  const totalExpense = 0;
  const totalIncome = 0;

  return (
    <div className="report-page">
      <Header />

      <main className="report-container">
        {/* Top row */}
        <section className="report-top">
          <Link to="/dashboard" className="back-btn">
             ← Повернутись на головну
          </Link>

          <BalanceCard />

          <MonthSwitcher />
        </section>

        {/* Income / Expense summary */}
        <section className="summary">
          <div className="expense-box">
            <span>Витрати:</span>

            <strong>
              {totalExpense.toFixed(2)} грн
            </strong>
          </div>

          <div className="divider"></div>

          <div className="income-box">
            <span>Доходи:</span>

            <strong>
              {totalIncome.toFixed(2)} грн
            </strong>
          </div>
        </section>

        {/* Categories */}
        <CategoryGrid />

        {/* Statistics chart will go here */}
        {/* <StatisticsChart /> */}
      </main>
    </div>
  );
}

export default ReportPage;