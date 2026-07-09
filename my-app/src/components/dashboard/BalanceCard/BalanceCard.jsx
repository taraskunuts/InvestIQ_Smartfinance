import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../index.css';
import "./BalanceCard.css"
import { setBalance, selectBalance } from '../../../redux/balance/balanceSlice.js';

const BalanceCard = () => {
    const dispatch = useDispatch();
    const currentBalance = useSelector(selectBalance);
    const [showTooltip, setShowTooltip] = useState(true);

    useEffect(() => {
        if (currentBalance) {
            setShowTooltip(false);
        }
    }, [currentBalance]);

    useEffect(() => {
        if (!showTooltip) return;

        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 30000);

        return () => clearTimeout(timer);
    }, [showTooltip]);

    const handleChange = (e) => {
        let val = e.target.value;

        val = val.replace(',', '.');
        if (val !== '' && !/^\d*\.?\d*$/.test(val)) {
            return;
        }

        dispatch(setBalance(val));
    };

    const handleConfirm = () => {
        setShowTooltip(false);
    };

    return (
        <div className='balance_rap-component flex'>
            <p className="balance-label">Баланс:</p>

            <div className="input-wrapper">
                <input 
                    type="text"  
                    value={currentBalance} 
                    onChange={handleChange} 
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

            <button 
                type="button" 
                className="confirm-btn btn"
                onClick={handleConfirm}
            >
                ПІДВЕРДИТИ
            </button>
        </div>
    );
};

export default BalanceCard;
