import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/MediaQueries";
import settings from "../styles/settings";

/**_______Style_______**/

const StyleHeader = styled.header`
width: auto;
height: auto;
text-align: center;
display: flex;
align-items: center;
justify-content: space-between;
`
const StyleImg = styled.img`
height: 47px;
width: 145px;

/* min:768px */

@media ${device.tablet} {
    height: auto;
    width: auto;
}
`

const StyleNavLink = styled(NavLink)`
color: ${settings.primary};
text-decoration: none;
text-transform: uppercase;
margin-left: 1rem;

&.active {
    text-decoration: underline;
}

/* min:768px */

@media ${device.tablet} {
    text-transform: none;
}


`
const StyleUl = styled.div`
font-size: 15px;
color: #FF6060;
width: 309px;
height: 34px;
display: flex;
justify-content: space-evenly;
margin-top: 5%;

/* min:425px */

@media ${device.mobileL} {
    font-size: 24px;
    margin-top:0;
}
`
/**-------------------**/

/*Composant Header*/

function Header(){
    return(
        <StyleHeader>
            <StyleImg src={`${process.env.PUBLIC_URL}/kasa_logo.png`} alt="Logo Kasa" className="header__logo"/>
                <StyleUl className="header__links">
                    {/*Link-Accueil*/}
                    <StyleNavLink to="/">Accueil</StyleNavLink>
                    {/*Link-APropos*/}
                    <StyleNavLink to="/APropos">A Propos</StyleNavLink>
                </StyleUl>
        </StyleHeader>
    )
}

export default Header