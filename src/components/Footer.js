import React from "react";

function Footer() {
    return(
        <footer>
            <img src={`${process.env.PUBLIC_URL}/kasa_logo_footer.png`} alt="Logo Kasa" className="logo_footer"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer