import React from "react";
import Card from "./card";
import logements from "../../Datas/logements.json"
import styled from "styled-components";
import { device } from "../../styles/MediaQueries";

/**_______Style_______**/

const StyleCard = styled.section`
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
justify-content: space-evenly;

/* min: 768px */

@media ${device.tablet} {
    background-color: #F6F6F6;
    flex-direction: row;
    flex-wrap: wrap;
}
`
/**-------------------**/

/*Composant Galerie*/

function Galerie(){
    return (
        <StyleCard className="galerie">
            {/*On map les logements et on les envoi au composant Card*/}
            {logements.map((logement, id)=> (
                <Card 
                    key={logement.id}
                    picture={logement.cover}
                    title={logement.title}
                    id={logement.id}
                />
            ))}
        </StyleCard>
    )
}

export default Galerie