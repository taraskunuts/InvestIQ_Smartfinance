import "./MonthSwitcher.css";
import { useState } from "react";

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

function MonthSwitcher() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="month-switcher">

      <span className="month-title">
        Поточний місяць
      </span>

      <div className="month-controls">

        <button onClick={previousMonth}>
          &#8249;
        </button>

        <div className="month-info">
          <h3>{months[month]}</h3>
          <p>{year}</p>
        </div>

        <button onClick={nextMonth}>
          &#8250;
        </button>

      </div>

    </div>
  );
}

export default MonthSwitcher;