import React from "react";
import Banner from '../components/Banner/Banner';
import Galerie from '../components/GalerieAccueil/Galerie';
import Footer from '../components/Footer';
import ErrorBoundary from "../components/ErrorBoundary";

/*Page d'Accueil*/

function Home(){
    return(
        <React.Fragment>
            <ErrorBoundary>
            <section className='main'>
                <Banner />
                <Galerie />
            </section>
            <Footer />
            </ErrorBoundary>
        </React.Fragment>
    )
}

export default Home