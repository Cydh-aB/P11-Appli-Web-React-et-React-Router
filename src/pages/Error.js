import React from "react";
import ErrorDisplay from '../components/ErrorDisplay';

/*Page D'erreur 404*/

function Error(){
    return(
        <React.Fragment>
            <section className='main'>
                <ErrorDisplay />
            </section>
        </React.Fragment>
    )
}

export default Error