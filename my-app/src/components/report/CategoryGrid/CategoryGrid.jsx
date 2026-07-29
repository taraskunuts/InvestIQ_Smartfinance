import "./CategoryGrid.css";

import { useState } from "react";
import { useSelector } from "react-redux";

import CategoryCard from "../CategoryCard/CategoryCard";

import {
    expenseCategories,
    incomeCategories
} from "../../../data/reportCategories";

import { selectTransactions } from "../../../redux/transactions/transactionsSlice";


function CategoryGrid({ selectedCategory, setSelectedCategory }){

    const [mode,setMode]=useState("expense");

    const transactions = useSelector(selectTransactions);



    const calculateAmount = (categoryId) => {

        return transactions
            .filter(item =>
                item.category === categoryId &&
                (
                    mode === "expense"
                        ? item.type === "expense"
                        : item.type === "income"
                )
            )
            .reduce(
                (sum,item)=>sum + item.amount,
                0
            );

    };



    const categories = (
        mode === "expense"
            ? expenseCategories
            : incomeCategories
    )
    .map(category => ({
        ...category,
        amount: calculateAmount(category.id)
    }));



    return(

        <section className="category-container">


            <div className="category-header">

                <button
                    className="arrow-btn"
                    onClick={()=>setMode("expense")}
                >
                    &#8249;
                </button>


                <h3>
                    {mode==="expense"
                        ?"ВИТРАТИ"
                        :"ДОХОДИ"}
                </h3>


                <button
                    className="arrow-btn"
                    onClick={()=>setMode("income")}
                >
                    &#8250;
                </button>

            </div>



            <div className="category-grid">

                {
                    categories.map(category=>(

                        <CategoryCard

                            key={category.id}

                            category={category}

                            active={
                                selectedCategory === category.id
                            }

                            onClick={() =>
                                setSelectedCategory(category.id)
                            }

                        />

                    ))
                }

            </div>


        </section>

    );

}


export default CategoryGrid;