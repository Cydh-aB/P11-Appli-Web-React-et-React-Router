import Home from './pages/Home';
import APropos from './pages/APropos';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import { device } from './styles/MediaQueries';
import DetailLogement from './pages/DetailsLogement';

/**_______Style_______**/

const StyleApp = styled.div`
margin : 5% 5%;

@media ${device.tablet} {
  margin: 5% 10%;
}
`
/**-------------------**/

function App() {
  return (
    <StyleApp>
      {/*Initialisation du router*/}
      <BrowserRouter>
        <Header />
        <Routes>
          {/*Route Accueil*/}
          <Route path='/' element={<Home />}/>
          {/*Route A Propos*/}
          <Route path='/APropos' element={<APropos />}/>
          {/*Route Detail du logement*/}
          <Route path='/location/:id' element={<DetailLogement />}/>
          {/*Route Erreur 404*/}
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;
