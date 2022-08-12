import React from "react";

function BannerInfo() {
    return(
        <div className="banner">
            <img src={`${process.env.PUBLIC_URL}/banner_apropos.png`} alt="Bannière info" className="banner__img"></img>
        </div>
    )
}

export default BannerInfo