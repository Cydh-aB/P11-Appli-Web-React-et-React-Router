import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import settings from "../styles/settings";
import { device } from "../styles/MediaQueries";

/**_______Style_______**/

const StyleFont = styled.div`
font-family: ${settings.fontFamily};
color: ${settings.primary};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50%;

/* min:768px */

@media ${device.tablet} {
    margin-top: 10%;
}
`

const StyleSpan = styled.span`
font-weight: 700;
font-size: 100px;

/* min:768px */

@media ${device.tablet} {
    font-size: 288px;
}
`
const StyleTitle = styled.h2`
font-weight: 300;
font-size: 22px;
text-align:center;
`
const StyleLink = styled(NavLink)`
color: ${settings.primary};
font-size: 14px;
margin-top: 45%;

/* min:425px */

@media ${device.mobileL} {
    margin-top: 20%;
    font-size: 18px;
}

/* min:768px */

@media ${device.tablet} {
    margin-top: 10%;
}
`
/**-------------------**/

/*Composant Erreur 404*/

function ErrorDisplay() {
    return (
        <StyleFont>
            <StyleSpan>404</StyleSpan>
            <StyleTitle>Oups ! La page que vous demandez n'existe pas.</StyleTitle>
            {/*Link-Accueil*/}
            <StyleLink to="/">Retourner sur la page d'accueil.</StyleLink>
        </StyleFont>
    )
}

export default ErrorDisplay