import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import settings from "../styles/settings";

const StyleFont = styled.div`
font-family: ${settings.fontFamily};
color: ${settings.primary};
`

const StyleSpan = styled.span`
position: absolute;
font-weight: 700;
font-size: 290px;
left: 35%;
top: 25%;
`
const StyleTitle = styled.h2`
position: absolute;
left: 27.9%;
top: 60%;
font-weight: 500;
font-size: 36px;
`
const StyleLink = styled(NavLink)`
position: absolute;
left: 43.8%;
color: ${settings.primary};
top: 85%;
font-size: 18px;
`

function Error() {
    return (
        <StyleFont>
            <StyleSpan>404</StyleSpan>
            <StyleTitle>Oups ! La page que vous demandez n'existe pas.</StyleTitle>
            <StyleLink to="/">Retourner sur la page d'accueil.</StyleLink>
        </StyleFont>
    )
}

export default Error