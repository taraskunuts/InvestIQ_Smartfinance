import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../index.css';
import "./BalanceCard.css";
import { setBalance, selectBalance } from '../../../redux/balance/balanceSlice.js';

const BalanceCard = () => {
    const dispatch = useDispatch();
    const currentBalance = useSelector(selectBalance);
    const [showTooltip, setShowTooltip] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (currentBalance !== undefined && currentBalance !== null && currentBalance !== 0) {
            setShowTooltip(false);
            if (!isFocused) {
                setInputValue(Number(currentBalance).toFixed(2));
            }
        }
    }, [currentBalance, isFocused]);

    useEffect(() => {
        if (!showTooltip) return;
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 30000);
        return () => clearTimeout(timer);
    }, [showTooltip]);

    const handleChange = (e) => {
        let val = e.target.value.replace(',', '.').trim();
        if (val !== '' && !/^\d*\.?\d*$/.test(val)) {
            return;
        }
        setInputValue(val);
    };

    const handleConfirm = () => {
        const parsedValue = parseFloat(inputValue);
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            const finalBalance = Math.round(parsedValue * 100) / 100;
            dispatch(setBalance(finalBalance));
            setInputValue(finalBalance.toFixed(2));
            setShowTooltip(false);
        } else {
            setInputValue(Number(currentBalance || 0).toFixed(2));
        }
    };

    const displayValue = isFocused 
        ? inputValue 
        : (currentBalance ? `${Number(currentBalance).toFixed(2)} UAH` : '');

    return (
        <div className='balance_rap-component flex'>
            <p className="balance-label">Баланс:</p>
            <div className="input-wrapper">
                <input 
                    type="text"  
                    value={displayValue} 
                    onChange={handleChange} 
                    onFocus={() => {
                        setIsFocused(true);
                        setInputValue(currentBalance ? Number(currentBalance).toString() : '');
                    }}
                    onBlur={() => setIsFocused(false)}
                    placeholder='00.00 UAH' 
                />
                {showTooltip && (
                    <div className="tooltip-box">
                        <div className="tooltip-arrow"></div>
                        <p className="tooltip-title">Привіт! Для початку роботи внесіть свій поточний баланс рахунку!</p>
                        <p className="tooltip-text">{"Ви не можете витрачати гроші, поки їх у Вас немає :)"}</p>
                    </div>
                )}
            </div>
            <button type="button" className="confirm-btn btn" onClick={handleConfirm}>
                ПІДВЕРДИТИ
            </button>
        </div>
    );
};

export default BalanceCard;
