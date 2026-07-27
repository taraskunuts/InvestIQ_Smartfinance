import "./IncomeExpenseToggle.css";
import { useState } from "react";

function IncomeExpenseToggle() {

    const [mode, setMode] = useState("expense");

    return (

        <div className="income-toggle">

            <button
                className={mode === "expense" ? "active" : ""}
                onClick={() => setMode("expense")}
            >
                Витрати
            </button>

            <span>|</span>

            <button
                className={mode === "income" ? "active" : ""}
                onClick={() => setMode("income")}
            >
                Доходи
            </button>

        </div>

    );
}

export default IncomeExpenseToggle;