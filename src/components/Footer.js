import React from "react";
import styled from "styled-components";

/**_______Style_______**/

const StyleFooter = styled.footer `
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
padding-top: 2rem;
padding-bottom: 1rem; 

p{
    color:#FFF;
}
`
/**-------------------**/

/*Composant Footer*/

function Footer() {
    return(
        <StyleFooter>
            <img src={`${process.env.PUBLIC_URL}/kasa_logo_footer.png`} alt="Logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </StyleFooter>
    )
}

export default Footer