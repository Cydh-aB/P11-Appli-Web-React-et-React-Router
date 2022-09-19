import React from "react";
import InfoLogement from "../components/detailsLogement/InfoLogement";
import ErrorBoundary from "../components/ErrorBoundary";

/*Page détail du logement*/

function DetailLogement() {
    return(
        <>
        <ErrorBoundary>
            <InfoLogement/>
        </ErrorBoundary>
        </>
    )
}

export default DetailLogement

