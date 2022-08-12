import React, { Component } from "react";
import PropTypes from "prop-types";

function Card ({title, picture}) {
    return(
        <div id="card">
            <img src={picture} alt="Appartements"/>
            <h2>{title}</h2>
        </div>
    )
}

Card.propTypes={
    title: PropTypes.string,
    picture: PropTypes.string
}

export default Card