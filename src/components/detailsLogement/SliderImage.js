import React, { useState } from "react";
import styled from "styled-components";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { device } from "../../styles/MediaQueries";

/**_______Style_______**/

const StyleSlider = styled.div`
width: 100%;
margin-top: 4%;
display:flex;
justify-content: center;
align-items: center;
`
const StyleSlideWrap = styled.div`
width: 100%;

&.slide {
    display: none;
}

&.active {
    display: block;
}
`

const StyleImg = styled.img`
width: 100%;
height: 415px;
object-fit: cover;
border-radius: 25px;
`
// Icones

const StyleArrowLeft = styled(FaAngleLeft)`
color: #FFFFFF;
position: absolute;
left: 5%;
font-size: 48px;

/* min:768px */

@media ${device.tablet} {
    left: 10%;
    font-size: 77px;
`
const StyleArrowRight = styled(FaAngleRight)`
color: #FFFFFF;
position: absolute;
right: 5%;
font-size: 48px;

/* min:768px */

@media ${device.tablet} {
    right: 10%;
    font-size: 77px;
}
`

/**-------------------**/

/*Composant Carousel*/

function SliderImage({slides}) {
    /*Hook useState pour définir l'image à afficher*/
    const[current, setCurrent] = useState(0)
    const length = slides.length

    /*Fonction pour l'affichage au clic précédente/suivante*/
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    return(
        <StyleSlider>
            {/*On vérifie le nombre d'image, si > 1 on affiche les flèches du carousel */}
            {slides.length > 1 &&
            <React.Fragment>
                {/*Précédente*/}
                <StyleArrowLeft className='left-arrow' onClick={prevSlide}/>
                {/*Suivante*/}
                <StyleArrowRight className='right-arrow' onClick={nextSlide}/>
            </React.Fragment>
            }
            {/*On map les images, on fixe l'index sur le current et la classe active*/}
            {slides.map((slide, index) => {
                return(
                    <StyleSlideWrap className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<StyleImg src={slide} alt="Logement"/>)}
                    </StyleSlideWrap>
                )
            })}
        </StyleSlider>
    )
}

export default SliderImage