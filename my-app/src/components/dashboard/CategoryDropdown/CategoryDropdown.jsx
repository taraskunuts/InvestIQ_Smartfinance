import { useState } from 'react';
import './CategoryDropdown.css';
import '../../../index.css';
const categories = [
    { value: 'transport', label: 'Транспорт' },
    { value: 'products', label: 'Продукти' },
    { value: 'health', label: "Здоров'я" },
    { value: 'alcohol', label: 'Алкоголь' },
    { value: 'entertainment', label: 'Розваги' },
    { value: 'home', label: 'Все для дому' },
    { value: 'tech', label: 'Техніка' },
    { value: 'communal', label: "Комуналка, зв'язок" },
    { value: 'sport', label: 'Спорт, хобі' },
    { value: 'education', label: 'Навчання' },
    { value: 'other', label: 'Інше' }
];

const CategoryDropdown = ({ category, setCategory}) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentCategory = categories.find(c => c.value === category);
    const displayLabel = currentCategory ? currentCategory.label : 'Категорія товару';

    const handleOptionClick = (value) => {
        setCategory(value);
        setIsOpen(false);
    };
   

    return (
        <div className="category-dropdown-wrapper">
            <div className={`dropdown-select ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                 <span className={category === '' ? 'placeholder' : 'value'}>
                    {displayLabel}
                </span>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>
            
            {isOpen && (
                <ul className="dropdown-list">
                    {categories.map((option) => (
                        <li 
                            key={option.value} 
                            onClick={() => handleOptionClick(option.value)}
                            className="dropdown-item"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryDropdown;
