import React, { useState } from "react";
import styled from "styled-components";
import settings from "../styles/settings";

/**_______Style_______**/

const StyleCard = styled.div`
margin-bottom: 37px;
`

const StyleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
height: 40%;
border-radius: 10px;
background-color: #FF6060;
`

const StyleTitle = styled.h2`
color: #ffffff;
font-weight: 500;
font-family: ${settings.fontFamily};
margin-left: 20px;
`

const StyleVector = styled.img`
margin-right: 20px;
width: 22px;
height: 15px;
cursor: pointer;
`

const StyleContent = styled.div`
position: relative;
margin-top: -35px;
z-index: -1;
height: auto;
font-size: 24px;
color: ${settings.fontFamily};
background-color: #F6F6F6;
border-radius: 5px;
padding-top: 1rem;
padding-bottom: 2px;
`

/**-------------------**/

/*Composant fonctionnel Collapse*/

function Collapse({title, children}) {
    //Hook useState pour gérer l'état ouvert/fermé
    const [isOpen, setIsOpen] = useState(false)

    //Gestion de la rotation de l'icone
    const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
    const rotation = { transform: rotate, transition: "0.5 ease-out"}

    return (
        <StyleCard>
            {/*On ouvre le Dropdown au clic */}
            <StyleBox className="dropBox" onClick={(e) => {setIsOpen(!isOpen)}}>
                <StyleTitle className="titleBox">{title}</StyleTitle>
                <StyleVector className="vectorBox" style={rotation} src={`${process.env.PUBLIC_URL}/Vector(1).png`}  alt="dropdown"/>
            </StyleBox>
            {/*Vérification, si le dropdown est ouvert on envoi les infos */}
            {isOpen && (
                <StyleContent className="contentBox">
                    {children}
                </StyleContent>
            )}
        </StyleCard>
    )
}

export default Collapse