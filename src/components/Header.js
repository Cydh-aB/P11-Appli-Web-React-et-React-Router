import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/kasa_logo.png`} alt="Logo Kasa" className="header__logo"></img>
                <ul className="header__links">
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Info">A Propos</NavLink></li>
                </ul>
        </header>
    )
}

export default Header