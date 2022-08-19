import React from "react";
import { StyleBanner, StyleImg } from "./Banner";

/*Composant Bannière-infos */

function BannerInfo() {
    return(
        <StyleBanner>
            <StyleImg src={`${process.env.PUBLIC_URL}/banner_apropos.png`} alt="Bannière info" className="banner__img"/>
        </StyleBanner>
    )
}

export default BannerInfo