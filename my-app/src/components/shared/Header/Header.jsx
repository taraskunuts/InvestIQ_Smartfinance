import React from 'react';

import '../../../index.css';
import './Header.css'; 

import { Link, Outlet } from "react-router-dom";
import logo from '../../../assets/logos/logo.svg';


const Header = () => {

    return (
        <div className='component-header flex'>
            <div className='header-logo flex'>
                <img src={logo} alt="header_logo" />
                <p>INVESTIQ</p>
            </div>

            <div className='header-user-actions'>
                <div className='user-profile'>
                    <div className='user-avatar'>U</div>
                    <span className='user-name'>User Name</span>
                </div>

                <span className='divider'></span>

                <Link to="logout" className="header-logout-btn">
                    Вийти
                </Link>
            </div>

            <Outlet />
        </div>
    );
}


export default Header;

