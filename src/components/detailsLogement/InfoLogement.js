import React from "react";
import {useParams} from 'react-router-dom'
import Footer from "../Footer";
import logements from "../../Datas/logements.json"
import Accordeon from "../APropos/Accordeon";
import styled from "styled-components";
import settings from "../../styles/settings";

const StyleMain = styled.div`
`
const StyleCollapse = styled.div`
`
const StyleDetail = styled.div`
`
const StyleRate = styled.div`
`
const StyleLocation = styled.div`
`

function InfoLogement() {
    const { id } = useParams()
    const filterLogement = logements.filter(location => location.id === id)

    for(let i = 0; i<filterLogement.length; i++){
        carousel = filterLogement[i].pictures
        description = filterLogement[i].description
        equipements = filterLogement[i].equipements
        lieu = filterLogement[i].location
        title = filterLogement[i].title
        tags = filterLogement[i].tags
        host = filterLogement[i].host
        rate = filterLogement[i].rating
    }

    return (
        <div>
            <div>
                {carousel.map((img, index) => <img key={index} src={img} alt='Diaporama'/>)}
            </div>
            <StyleDetail className="details">
                <StyleLocation>
                    <div>
                        {<h1>{title}</h1>}
                        {<p>{lieu}</p>}
                    </div>
                </StyleLocation>
                <StyleRate>
                
                </StyleRate>
            </StyleDetail>
            <StyleMain>
                <StyleCollapse>
                    <Accordeon></Accordeon>
                </StyleCollapse>
                <StyleCollapse>
                    <Accordeon></Accordeon>
                </StyleCollapse>
            </StyleMain>
        </div>
    )
}

export default InfoLogement