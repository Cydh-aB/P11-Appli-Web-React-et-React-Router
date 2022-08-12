import React from "react";
import Banner from '../components/Banner';
import Galerie from '../components/Galerie';
import Footer from '../components/Footer';

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