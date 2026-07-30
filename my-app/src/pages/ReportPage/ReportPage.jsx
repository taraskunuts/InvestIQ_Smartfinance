import "./ReportPage.css";
import "../../index.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/shared/Header/Header";
import MonthSwitcher from "../../components/report/MonthSwitcher/MonthSwitcher";
import CategoryGrid from "../../components/report/CategoryGrid/CategoryGrid";
import StatisticsChart from "../../components/report/StatisticsChart/StatisticsChart";
import BalanceCard from "../../components/dashboard/BalanceCard/BalanceCard";

import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/transactionsSlice";

function ReportPage() {
    const transactions = useSelector(selectTransactions);

    const today = new Date();

    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const [mode, setMode] = useState("expense");
    const [selectedCategory, setSelectedCategory] = useState("products");

    const filteredTransactions = transactions.filter(item => {
        const [, itemMonth, itemYear] = item.date.split(".");

        return (
            Number(itemMonth) - 1 === month &&
            Number(itemYear) === year
        );
    });

    const totalExpense = filteredTransactions
        .filter(item => item.type === "expense")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalIncome = filteredTransactions
        .filter(item => item.type === "income")
        .reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="report-page">

            <Header />

            <main className="report-container">

                <section className="report-top">

                    <Link
                        to="/dashboard"
                        className="back-btn"
                    >
                        ← Повернутись на головну
                    </Link>

                    <BalanceCard />

                    <MonthSwitcher
                        month={month}
                        year={year}
                        setMonth={setMonth}
                        setYear={setYear}
                    />

                </section>

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

                <CategoryGrid
                    mode={mode}
                    setMode={setMode}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    month={month}
                    year={year}
                />

                <StatisticsChart
                    category={selectedCategory}
                    mode={mode}
                    month={month}
                    year={year}
                />

            </main>

        </div>
    );
};

export default ReportPage;