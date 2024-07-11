import React from "react";
import '../styles/HeaderSection.css'

const HeaderSection = () => {
    return (
        <header className="header">
            <div className="logo">
                <img 
                src=""/>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderSection;