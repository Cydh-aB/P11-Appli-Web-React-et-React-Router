import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import settings from "../../styles/settings";

/**_______Style_______**/

const StyleCard = styled.div`
display: flex;
flex-direction: column;
height: 340px;
width: 340px;
margin-top: 2rem;
border-radius: 15px;
`

const StyleImg = styled.img`
height: 340px;
width: 340px;
object-fit: cover;
border-radius: 15px;
`

const StyleH2 = styled.h2`
font-family: ${settings.fontFamily};
font-style: normal;
position: relative;
font-weight: 500;
font-size: 18px;
width: 300px;
bottom: 20%;
color: #FFFFFF;
margin-left: 10px;
`

const StyleNavLink = styled(NavLink)`
text-decoration: none;
`
/**-------------------**/

/*Composant Carte pour l'affichage des logements-Accueil */

function Card ({title, picture, id}) {
    let locationDetails=`/location/${id}`
    return(
        <StyleCard>
            <StyleNavLink to={locationDetails}>
                <StyleImg src={picture} alt="Appartements"/>
                <StyleH2>{title}</StyleH2>
            </StyleNavLink>
        </StyleCard>
    )
}

export default Card