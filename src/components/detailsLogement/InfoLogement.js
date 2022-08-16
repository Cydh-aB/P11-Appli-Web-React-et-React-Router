import React from "react";
import {useParams} from 'react-router-dom'
import Footer from "../Footer";
import logements from "../../Datas/logements.json"
import Accordeon from "../APropos/Accordeon";
import styled from "styled-components";
import settings from "../../styles/settings";
import SliderImage from "./SliderImage";
import LocationDetails from "./LocationDetails";


let carousel = []
let description = ""
let equipements = ""
let location = ""
let title = ""
let tags = ""
let host = ""
let rate = ""


const StyleMain = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const StyleCollapse = styled.div`
width: 46%;
color: ${settings.primary};

.collapseLocation{
    width:0;
}

p, ul{
    margin-left:2rem;
    margin-right: 2rem;
    font-size: 18px;
}
`
const StyleUl = styled.ul`
list-style-type: none;
padding-left: 0;
`


function InfoLogement() {
    const { id } = useParams()
    const filterLogement = logements.filter(location => location.id === id)

    for(let i = 0; i<filterLogement.length; i++){
        carousel = filterLogement[i].pictures
        description = filterLogement[i].description
        equipements = filterLogement[i].equipments
        location = filterLogement[i].location
        title = filterLogement[i].title
        tags = filterLogement[i].tags
        host = filterLogement[i].host
        rate = filterLogement[i].rating
    }

    return (
        <>
            <SliderImage slides={carousel} />
            <LocationDetails details= {{title, location, tags, rate, host}}/>
            <StyleMain>
                <StyleCollapse>
                    <Accordeon title='Description'>
                        {<p>{description}</p>}
                    </Accordeon>
                </StyleCollapse>
                <StyleCollapse>
                    <Accordeon title='Équipements'>
                    {<StyleUl className='equipementsLocation'>{equipements.map((equipement, index) => <li key={index}>{equipement}</li>)}</StyleUl>}
                    </Accordeon>
                </StyleCollapse>
            </StyleMain>
        </>
    )
}

export default InfoLogement