import React from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'
import settings from "../../styles/settings";
import { device } from "../../styles/MediaQueries";

const StyleDetail = styled.section`
width: 100%;
display: flex;
justify-content: space-between;
font-family: ${settings.fontFamily};
margin-bottom: 1rem;

@media ${device.laptop} {
    flex-direction: column;
}
`
const StyleLocation = styled.div`
color: #FF6060;

p{
    font-size: 18px;
}
`
const StyleHostProfile = styled.div`
margin-top : 1.8rem;

.hostProfil {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}

p{
    font-size: 18px;
    color: #FF6060;
}

img {
    height: 64px;
    width: 64px;
    border-radius: 50px;
    margin-left: 1rem;
}
`
const StyleTag = styled.div`
display: flex;
list-style-type: none;

li {
    margin-right: 1rem;
    background-color: #FF6060;
    color: #FFFFFF;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 30px;
}
`
const StyleStar = styled.div`
font-size: 30px;
`

const StyleRatingRed = styled(FaStar)`
color: #FF6060;
margin-right: 1rem;
`

const StyleRatingGrey = styled(FaStar)`
color: #E3E3E3;
margin-right: 1rem;
`


function LocationDetails({details}) {
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
                {[...new Array(totalRate)].map((arr, index) => {
                    return index <rate ? <StyleRatingRed/> : <StyleRatingGrey/>
                })}
            </StyleStar>                    
        </StyleHostProfile>
    </StyleDetail>
    )
    
}
export default LocationDetails