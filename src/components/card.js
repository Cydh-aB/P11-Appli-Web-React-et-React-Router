import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card ({title, picture, id}) {
    let locationDetails=`/location/${id}`
    return(
        <div id="card">
            <NavLink to={locationDetails}>
            <img src={picture} alt="Appartements"/>
            <h2>{title}</h2>
            </NavLink>
        </div>
    )
}

Card.propTypes={
    title: PropTypes.string,
    picture: PropTypes.string
}

export default Card