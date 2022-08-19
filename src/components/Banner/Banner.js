import React from "react";
import styled from "styled-components";
import { device } from "../../styles/MediaQueries";
import settings from "../../styles/settings";

/**_______Style_______**/

//On export StyleBanner/StyleImg pour réutiliser le CSS 

export const StyleBanner = styled.section`
width: auto;
position: relative;
`
export const StyleImg = styled.img`
width: 100%;
margin-top: 4%;
margin-bottom: 4%;
border-radius: 20px;
width: 100%;
min-height: 111px;
object-fit: cover;
mix-blend-mode: darken;
filter: brightness(0.9);
`
const StyleSlogan = styled.h1`
position: absolute;
top: 11%;
left: 5%;
right: 25%;
font-size: 22px;
font-weight: 500;
color: #fff;
width: 200px;
font-family: ${settings.fontFamily};

/* min:425px */

@media ${device.mobileL} {
    width: 100%;
    top: 18%;
    left: 2%;
    font-size: 27px;
}

/* min:768px */

@media ${device.tablet} {
    font-size: 38px;
    left: 8%;
    top: 17%;
}

/* min:1024px */

@media ${device.laptop} {
    max-width: 700px;
    top: 20%;
    left: 25%;
}

/* min:1440px */

@media ${device.laptopL} {
    top: 25%;
    left: 25%;
    font-size: 47px;
}

/* min:1800px */

@media ${device.desktop} {
    top: 30%;
    left: 28%;
}
`

/**-------------------**/

/*Composant Bannière */

function Banner () {
    return(
        <StyleBanner> 
            <StyleImg src={`${process.env.PUBLIC_URL}/kasa_banner.png`} alt="Bannière de la page home"/>
            <StyleSlogan>Chez vous, partout et ailleurs</StyleSlogan>
        </StyleBanner>
    )
}

export default Banner