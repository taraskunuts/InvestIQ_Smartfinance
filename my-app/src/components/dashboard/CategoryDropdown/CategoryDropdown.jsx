import { useState } from 'react';
import './CategoryDropdown.css'; // Переконайтеся, що створили цей файл стилів

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

const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState('Категорія товару');

    const handleOptionClick = (label) => {
        setSelectedLabel(label);
        setIsOpen(false);
    };

    return (
        <div className="category-dropdown-wrapper">
            <div className={`dropdown-select ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className={selectedLabel === 'Категорія товару' ? 'placeholder' : 'value'}>
                    {selectedLabel}
                </span>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>
            
            {isOpen && (
                <ul className="dropdown-list">
                    {categories.map((option) => (
                        <li 
                            key={option.value} 
                            onClick={() => handleOptionClick(option.label)}
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
