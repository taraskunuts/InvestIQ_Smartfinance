import React from "react";

import "../../../index.css";
import "./Header.css";

import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../../assets/logos/logo.svg";


const Header = () => {

    const user = useSelector((state) => state.auth.user);


    const firstLetter =
        user?.email?.charAt(0).toUpperCase() || "U";


    return (
        <div className="component-header flex">

            <div className="header-logo flex">

                <img 
                    src={logo} 
                    alt="header_logo" 
                />

                <p>
                    INVESTIQ
                </p>

            </div>



            <div className="header-user-actions">

                <div className="user-profile">

                    <div className="user-avatar">
                        {firstLetter}
                    </div>


                    <span className="user-name">
                        {user?.email || "User Name"}
                    </span>

                </div>


                <span className="divider"></span>


                <Link 
                    to="logout" 
                    className="header-logout-btn"
                >
                    Вийти
                </Link>

            </div>


            <Outlet />

        </div>
    );
}


export default Header;