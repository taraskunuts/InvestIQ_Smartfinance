import "./TransactionForm.css"
import '../../../index.css';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../../../redux/transactions/transactionsSlice.js';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../../assets/icons/calendar.svg';
import calculator from '../../../assets/icons/calculator.svg';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import { setBalance } from '../../../redux/balance/balanceSlice.js';
const TransactionForm = ({ type }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const currentBalance = useSelector(state => state.balance.value)
    useEffect(() => {
        setError('');
        setCost('');
        setCategory('');
    }, [type]);

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description.trim()) {
            setError('Поле не може бути порожнім');
            return;
        }
        if (!category) {
            setError('Будь ласка, виберіть категорію товару');
            return;
        }
        if (!cost) {
            setError('Введіть суму');
            return;
        }
        const num = parseFloat(cost);

        if (isNaN(num) || num < 1) {
            setError('Мінімальна сума: 1');
            return;
        }

        let numericBalance = 0;
        if (currentBalance && typeof currentBalance === 'string' && !currentBalance.startsWith('[')) {
            numericBalance = parseFloat(currentBalance.replace(' UAH', '').trim()) || 0;
        } else if (typeof currentBalance === 'number') {
            numericBalance = currentBalance;
        }

        if (type === 'expense' && num > numericBalance) {
            setError('Звідки гроші');
            return;
        }

        let newBalanceValue = numericBalance;
        if (type === 'income') {
            newBalanceValue += num;
        } else {
            newBalanceValue -= num;
        }

        const finalBalanceNumber = Math.round(newBalanceValue * 100) / 100;
        dispatch(setBalance(finalBalanceNumber));

        const finalDate = selectedDate
            ? selectedDate.toLocaleDateString('uk-UA')
            : today.toLocaleDateString('uk-UA');

        const transactionData = {
            id: Date.now(),
            date: finalDate,
            description: description,
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

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const todayPlaceholder = `${day}.${month}.${year}`;

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

                        {}
                        <CategoryDropdown 
                            type={type} 
                            category={category} 
                            setCategory={(val) => {
                                setCategory(val);
                                setError('');
                        }} />

                        <div className="cost-wrapper flex">
                            <input
                                type="text"
                                className="input-cost"
                                placeholder="0.00"
                                value={cost}
                                onChange={(e) => {
                                    let val = e.target.value.replace(',', '.');

                                    if (val !== '' && !/^\d*\.?\d*$/.test(val)) {
                                        return;
                                    }

                                    setCost(val);

                                    const num = parseFloat(val);

                                    if (val === '') {
                                        setError('Поле не може бути порожнім');
                                    } else if (isNaN(num)) {
                                        setError('Введіть коректне число');
                                    } else if (num < 1) {
                                        setError('Мінімальна сума: 1');
                                    } else {
                                        setError('');
                                    }
                                }}
                            />
                            <img src={calculator} alt="" />
                        </div>
                    </div>

                    <div className="buttons-group flex">
                        <button type="submit" className="btn btn-submit" >ВВЕСТИ</button>
                        <button type="button" className="btn btn-clear"
                            onClick={() => {
                                setDescription('');
                                setCost('');
                                setSelectedDate(null);
                                setError('');
                                setCategory('');
                            }}
                        >ОЧИСТИТИ</button>
                    </div>
                </form>
            </div>

            <div className="info-error-container" style={{ paddingLeft: '160px', marginTop: '8px' }}>
     
                {error && (
                    <span className="error-text" style={{ color: 'red', fontSize: '12px', display: 'block', fontWeight: '400' }}>
                        {error}
                    </span>
                )}
            </div>
        </div>
    )
}

export default TransactionForm;
