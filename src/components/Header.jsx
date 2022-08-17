import React from 'react';
import { useState } from 'react';

import {Hamburger, Logo, Close} from "../assets/images/images"
const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    return (
        <header className='main-header'>
        <Logo/>
        
        <nav className={isMenuActive ? "active": ''}>
            <menu >
                <li className="nav-link">Home</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Contact</li>
                <li className="nav-link">Blog</li>
                <li className="nav-link">Career</li>
            </menu>
        </nav>

        <div onClick={() => {
            setIsMenuActive(!isMenuActive)
        }} className="menu-icon-container">
            <Hamburger className={!isMenuActive ? "active": ""}/>
            <Close className={isMenuActive ? "active": ""}/>
        </div>
        <button className="invite-btn"> <span>Request Invite</span></button>
            
        </header>
    );
}

export default Header;
