import React, { useState , useRef } from 'react';
import '../../../index.css';
import "./BalanceCard.css"

const BalanceCard = () => {
  const [balance, setBalance] = useState('00.00 UAH');
  const [showTooltip, setShowTooltip] = useState(true);
    const timeoutRef = useRef(null);
  const handleChange = (e)=>{
     const value = e.target.value;
    setBalance(value);
       if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if(value !=='00.00 UAH' && value.trim()!==''){
         timeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    }else if(value ==='00.00 UAH' || value.trim()===''){
       timeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, 1000);
    }


    
  }
  return (


    <div className='balance_rap-component flex'>
      <p className="balance-label">Баланс:</p>
      
      <div className="input-wrapper">
        <input type="text" value={balance} onChange ={handleChange} />
        
        {showTooltip && (
          <div className="tooltip-box">
            <div className="tooltip-arrow"></div>
            <p className="tooltip-title">Привіт! Для початку роботи внесіть свій поточний баланс рахунку!</p>
            <p className="tooltip-text">{"Ви не можете витрачати гроші, поки їх у Вас немає :)"}</p>

          </div>
        )}
      </div>

      <button className="confirm-btn" onClick={()=>setBalance('00.00 UAH')}>ПІДВЕРДИТИ</button>
    </div>
  );
};

export default BalanceCard;
