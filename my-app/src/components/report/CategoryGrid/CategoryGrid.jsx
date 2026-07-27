import "./CategoryGrid.css";

import { useState } from "react";

import CategoryCard from "../CategoryCard/CategoryCard";

import {

    expenseCategories,

    incomeCategories

} from "../../../data/reportCategories";

function CategoryGrid(){

    const [mode,setMode]=useState("expense");

    const [selected,setSelected]=useState("products");

    const categories=

        mode==="expense"

            ?expenseCategories

            :incomeCategories;

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

                            active={selected===category.id}

                            onClick={()=>setSelected(category.id)}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default CategoryGrid;