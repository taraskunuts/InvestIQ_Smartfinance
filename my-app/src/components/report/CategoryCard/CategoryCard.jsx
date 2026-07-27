import "./CategoryCard.css";

function CategoryCard({

    category,

    active,

    onClick

}){

    return(

        <button

            className={`category-card ${active ? "active" : ""}`}

            onClick={onClick}

        >

            <span className="category-amount">

                {category.amount.toFixed(2)}

            </span>

            <div className="category-icon-wrapper">

                <img

                    src={category.background}

                    className="category-bg"

                    alt=""

                />

                <img

                    src={category.icon}

                    className="category-icon"

                    alt={category.title}

                />

            </div>

            <span className="category-title">

                {category.title}

            </span>

        </button>

    );

}

export default CategoryCard;