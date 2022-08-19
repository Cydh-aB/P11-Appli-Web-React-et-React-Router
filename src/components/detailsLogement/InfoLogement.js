import React from "react";
import {useParams} from 'react-router-dom'
import logements from "../../Datas/logements.json"
import Collapse from "../Collapse";
import styled from "styled-components";
import settings from "../../styles/settings";
import SliderImage from "./SliderImage";
import LocationDetails from "./LocationDetails";
import { device } from "../../styles/MediaQueries";

/*Déclaration de variable pour le composant */

let carousel = []
let description = ""
let equipements = ""
let location = ""
let title = ""
let tags = ""
let host = ""
let rate = ""

/**_______Style_______**/

const StyleMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

/* min:768px */
@media ${device.tablet}{
    flex-direction: row;
}
`
const StyleCollapse = styled.div`
color: ${settings.primary};

/* min:768px */
@media ${device.tablet} {
    width: 45%;
}

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
/**-------------------**/

/* Composant pour la page Détail des logement */

function InfoLogement() {
    //On pose le Hook pour récupérer l'id passée en URL
    const { id } = useParams()
    //On récupère les données liée à l'id, pour s'en servir dans le return
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
            {/*On passe les images au carousel*/}
            <SliderImage slides={carousel} />
            {/*Les détails du logements*/}
            <LocationDetails details= {{title, location, tags, rate, host}}/>
            <StyleMain>
                <StyleCollapse>
                    <Collapse title='Description'>
                        {<p>{description}</p>}
                    </Collapse>
                </StyleCollapse>
                <StyleCollapse>
                    <Collapse title='Équipements'>
                    {/*On map les équipements du logement dans une liste*/}
                    {<StyleUl className='equipementsLocation'>{equipements.map((equipement, index) => <li key={index}>{equipement}</li>)}</StyleUl>}
                    </Collapse>
                </StyleCollapse>
            </StyleMain>
        </>
    )
}

export default InfoLogement