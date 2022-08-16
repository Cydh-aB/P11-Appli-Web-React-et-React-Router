import React, { useState } from "react";
import styled from "styled-components";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const StyleSlider = styled.div`
width: 100%;
margin-top: 4%;
display:flex;
justify-content: center;
align-items: center;
`
const StyleSlideWrap = styled.div`
width: 100%
`

const StyleImg = styled.img`
width: 100%;
height: 415px;
object-fit: cover;
border-radius: 25px;
`
// Styled Icons

const StyleArrowLeft = styled(FaAngleLeft)`
color: #FFFFFF;
position: absolute;
left: 10%;
width: 41px;
height: 79.2px;
`
const StyleArrowRight = styled(FaAngleRight)`
color: #FFFFFF;
position: absolute;
right: 10%;
width: 41px;
height: 79.2px;
`

function SliderImage({slides}) {
    const[current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    return(
        <StyleSlider>
            <StyleArrowLeft className='left-arrow' onClick={prevSlide}/>
            <StyleArrowRight className='right-arrow' onClick={nextSlide}/>
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