import React from "react";
import Card from "./card";
import logements from "../Datas/logements.json"

function Galerie(){
    return (
        <section className="galerie">
            {logements.map((logement)=> (
                <Card 
                    key={logement.id}
                    picture={logement.cover}
                    title={logement.title}
                />
            ))}
        </section>
    )
}

export default Galerie