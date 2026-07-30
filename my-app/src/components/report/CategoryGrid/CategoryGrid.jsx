import "./CategoryGrid.css";
import "../../../index.css";

import { useSelector } from "react-redux";

import CategoryCard from "../CategoryCard/CategoryCard";

import {
    expenseCategories,
    incomeCategories
} from "../../../data/reportCategories";

import { selectTransactions } from "../../../redux/transactions/transactionsSlice";

function CategoryGrid({
    selectedCategory,
    setSelectedCategory,
    mode,
    setMode,
    month,
    year
}) {

    const transactions = useSelector(selectTransactions);

    const filteredTransactions = transactions.filter(item => {

        const [, itemMonth, itemYear] = item.date.split(".");

        return (
            Number(itemMonth) - 1 === month &&
            Number(itemYear) === year
        );

    });

    const calculateAmount = (categoryId) => {

        return filteredTransactions
            .filter(item =>
                item.category === categoryId &&
                item.type === mode
            )
            .reduce((sum, item) => sum + item.amount, 0);

    };

    const categories = (
        mode === "expense"
            ? expenseCategories
            : incomeCategories
    ).map(category => ({
        ...category,
        amount: calculateAmount(category.id)
    }));

    return (

        <section className="category-container">

            <div className="category-header">

                <button
                    className="arrow-btn"
                    onClick={() => {
                        setMode("expense");
                        setSelectedCategory(expenseCategories[0].id);
                    }}
                >
                    &#8249;
                </button>

                <h3>
                    {mode === "expense"
                        ? "ВИТРАТИ"
                        : "ДОХОДИ"}
                </h3>

                <button
                    className="arrow-btn"
                    onClick={() => {
                        setMode("income");
                        setSelectedCategory(incomeCategories[0].id);
                    }}
                >
                    &#8250;
                </button>

            </div>

            <div className="category-row">

                {categories.slice(0, 6).map(category => (

                    <CategoryCard
                        key={category.id}
                        category={category}
                        active={selectedCategory === category.id}
                        onClick={() => setSelectedCategory(category.id)}
                    />

                ))}

            </div>

            {categories.length > 6 && (

                <div className="category-row second-row">

                    {categories.slice(6).map(category => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                            active={selectedCategory === category.id}
                            onClick={() => setSelectedCategory(category.id)}
                        />

                    ))}

                </div>

            )}

        </section>

    );

}

export default CategoryGrid;