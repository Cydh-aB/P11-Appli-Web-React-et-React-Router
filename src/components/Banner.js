import React from "react";

function Banner () {
    return(
        <section className="banner"> 
            <img src={`${process.env.PUBLIC_URL}/kasa_banner.png`} alt="Bannière de la page home" className="banner__img"></img>
            <h1 className="banner__slogan">Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner