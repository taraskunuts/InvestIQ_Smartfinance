 import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../../index.css';

 import logo from '../../../assets/logos/logo.svg';  


const Header = () => {
  return (
    <div className='component-header flex'>
      <div className='header-logo flex'> 
        <img src={logo} alt="header_logo" />
        <p>InvestIQ</p>
      </div>
      
      <Link to="?logout=true" className="header-logout-btn">
        Вийти
      </Link>
    </div>
  );
}

// Обязательно должен быть дефолтный экспорт!
export default Header; 
 
