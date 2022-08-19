import React from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'
import settings from "../../styles/settings";
import { device } from "../../styles/MediaQueries";

/**_______Style_______**/

const StyleDetail = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
font-family: ${settings.fontFamily};
margin-bottom: 1rem;

/* min:768px */

@media ${device.tablet} {
    flex-direction: row;
}
`
const StyleLocation = styled.div`
color: #FF6060;

h1{
    font-weight: 500; 
}

p{
    font-size: 18px;
}
`
const StyleHostProfile = styled.div`
margin-top : 1rem;

display:flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;

.hostProfil {
    display:flex;
}

/* min:768px */

@media ${device.tablet}{
    flex-direction:column;
    justify-content: unset;
}

p{
    font-size: 18px;
    color: #FF6060;
}

img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin-left: 1rem;
}
`
const StyleTag = styled.div`
display: flex;
list-style-type: none;
flex-wrap: wrap;

li {
    margin-right: 1rem;
    background-color: #FF6060;
    color: #FFFFFF;
    padding-right: 0.7rem;
    padding-left: 0.7rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    margin-bottom: 0.7rem;
    border-radius: 5px;
    white-space: nowrap;
}

/* min:768px */

@media ${device.tablet} {
    li {
        border-radius: 10px;
    }
}
`
const StyleStar = styled.div`
font-size: 20px;
margin-right: .0.5rem;

/* min:768px */

@media ${device.tablet} {
    font-size: 22px;
    margin-right: 1rem;
}
`

const StyleRatingRed = styled(FaStar)`
color: #FF6060;
`

const StyleRatingGrey = styled(FaStar)`
color: #E3E3E3;
`
/**-------------------**/

function LocationDetails({details}) {
    /*On récupère les données*/
    let title = details.title
    let location = details.location
    let tags = details.tags
    let host = details.host
    let rate = details.rate
    let totalRate = 5

    return(
        <StyleDetail className="details">
        <StyleLocation>
            <div>
                {<h1>{title}</h1>}
                {<p>{location}</p>}
            </div>
            {/*On map les tags dans une liste*/}
            <StyleTag>
                {tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </StyleTag>
        </StyleLocation>
        <StyleHostProfile>
            <div className="hostProfil">
                {<p>{host.name}</p>}
                <img src={host.picture} alt="profil hôte"></img>
            </div>
            <StyleStar>
                {/*On défini sur une base de 5, le rating du logement et on l'affiche*/}
                {[...new Array(totalRate)].map((arr, index) => {
                    return index <rate ? <StyleRatingRed key={index}/> : <StyleRatingGrey key={index}/>
                })}
            </StyleStar>                    
        </StyleHostProfile>
    </StyleDetail>
    )
    
}
export default LocationDetails