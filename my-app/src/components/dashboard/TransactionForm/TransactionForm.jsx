import "./TransactionForm.css";
import '../../../index.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../../redux/transactions/transactionsSlice.js';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../../assets/icons/calendar.svg';
import calculator from '../../../assets/icons/calculator.svg';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';

const TransactionForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const todayPlaceholder = `${day}.${month}.${year}`;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description.trim() || !category || !cost) {
            setError('Заповніть усі поля');
            return;
        }

        let type = 'expense';
        let cleanCost = cost;

        if (cost.startsWith('+')) { 
            type = 'income'; 
            cleanCost = cost.slice(1); 
        } else if (cost.startsWith('-')) { 
            type = 'expense'; 
            cleanCost = cost.slice(1); 
        }

        const num = parseFloat(cleanCost);
        if (isNaN(num) || num < 1) {
            setError('Мінімальна сума: 1');
            return;
        }

        const finalDate = selectedDate 
            ? selectedDate.toLocaleDateString('uk-UA') 
            : today.toLocaleDateString('uk-UA');

        const transactionData = {
            id: Date.now(),
            date: finalDate,
            description: description.trim(),
            category: category,
            amount: num,
            type: type
        };

        dispatch(addTransaction(transactionData)); 

        setError(''); 
        setCost(''); 
        setDescription(''); 
        setCategory(''); 
        setSelectedDate(null);
    };

    return (
        <div className='transaction_form-container flex' style={{ display: 'block' }}>
            <div className='form-wrapper-row flex' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='date'>
                    <img src={calendar} alt="Календар" className="calendar-icon" />
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                        className="minimal-date-text"
                        placeholderText={todayPlaceholder}
                    />
                </div>

                <form className="form-core flex" onSubmit={handleSubmit}>
                    <div className="inputs-combobox flex">
                        <input
                            type="text"
                            className="input-desc"
                            placeholder="Опис товару"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                if (e.target.value.trim() !== '') {
                                    setError('');
                                }
                            }}
                        />

                        <CategoryDropdown 
                            category={category} 
                            setCategory={(val) => {
                                setCategory(val);
                                setError('');
                            }} 
                        />

                        <div className="cost-wrapper flex">
                            <input
                                type="text"
                                className="input-cost"
                                placeholder="0.00"
                                value={cost}
                                onChange={(e) => {
                                    let val = e.target.value.replace(',', '.');
                                    if (val !== '' && !/^[+-]?\d*\.?\d*$/.test(val)) {
                                        return;
                                    }
                                    setCost(val);

                                    let checkVal = val;
                                    if (val.startsWith('+') || val.startsWith('-')) {
                                        checkVal = val.slice(1);
                                    }

                                    const numCheck = parseFloat(checkVal);
                                    if (val === '') {
                                        setError('Поле не може бути порожнім');
                                    } else if (val === '+' || val === '-') {
                                        setError('Введіть число після знаку');
                                    } else if (isNaN(numCheck)) {
                                        setError('Введіть коректне число');
                                    } else if (numCheck < 1) {
                                        setError('Мінімальна сума: 1');
                                    } else {
                                        setError('');
                                    }
                                }}
                            />
                            <img src={calculator} alt="Калькулятор" />
                        </div>
                    </div>

                    <div className="buttons-group flex">
                        <button type="submit" className="btn btn-submit">ВВЕСТИ</button>
                        <button 
                            type="button" 
                            className="btn btn-clear"
                            onClick={() => {
                                setDescription('');
                                setCost('');
                                setSelectedDate(null);
                                setError('');
                                setCategory('');
                            }}
                        >
                            ОЧИСТИТИ
                        </button>
                    </div>
                </form>
            </div>

            <div className="info-error-container" style={{ paddingLeft: '160px', marginTop: '8px' }}>
                <span className="info-text" style={{ color: '#A6ABB9', fontSize: '12px', display: 'block', marginBottom: '4px', fontWeight: '400' }}>
                    Напишіть +, якщо це дохід, або -, якщо витрата
                </span>
                {error && (
                    <span className="error-text" style={{ color: 'red', fontSize: '12px', fontWeight: '500', display: 'block' }}>
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TransactionForm;
