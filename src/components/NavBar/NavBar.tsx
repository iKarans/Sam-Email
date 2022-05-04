import React from 'react';
import "./NavBar.scss";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
        return (
            <nav className='nav-bar'>
                <img src={logo} alt="logo" className="nav-bar__logo"/>
                <img src={avatar} alt="logo" className="nav-bar__avatar"/>
            </nav>
        );
}