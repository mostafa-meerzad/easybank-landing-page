import React from 'react';

import {Logo} from "../assets/images/images"
const Header = () => {
    return (
        <header>
        <Logo/>
        
        <nav>
            <menu>
                <li className="nav-link">Home</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Contact</li>
                <li className="nav-link">Blog</li>
                <li className="nav-link">Career</li>
            </menu>
        </nav>
        <button className="invite-btn"> <span>Request Invite</span></button>
            
        </header>
    );
}

export default Header;
