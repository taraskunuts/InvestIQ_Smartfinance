 import "./TransactionForm.css"
import '../../../index.css';
import { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../../assets/icons/calendar.svg';
import calculator from '../../../assets/icons/calculator.svg';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';

const TransactionForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const todayPlaceholder = `${day}.${month}.${year}`;

    return (
        <div className='transaction_form-container flex'>
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
            
            <form action="" className="form-core flex">
                <div className="inputs-combobox flex">
                    <input 
                        type="text" 
                        className="input-desc" 
                        placeholder="Опис товару"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    
                    <CategoryDropdown /> 
                    
                    <div className="cost-wrapper flex">
                        <input 
                            type="text" 
                            className="input-cost" 
                            placeholder="0.00" 
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                        <img src={calculator} alt="Калькулятор" className="calc-icon" />
                    </div>
                </div>

                <div className="buttons-group flex">
                    <button type="submit" className="btn btn-submit">ВВЕСТИ</button>
                    <button type="button" className="btn btn-clear">ОЧИСТИТИ</button>
                </div>
            </form>
        </div>
    )
}

export default TransactionForm;
