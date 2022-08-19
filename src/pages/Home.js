import React from "react";
import Banner from '../components/Banner/Banner';
import Galerie from '../components/GalerieAccueil/Galerie';
import Footer from '../components/Footer';

/*Page d'Accueil*/

function Home(){
    return(
        <React.Fragment>
            <section className='main'>
                <Banner />
                <Galerie />
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Home