import './App.scss';
import Home from './pages/Home';
import Info from './pages/Info';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import InfoLogement from './components/detailsLogement/InfoLogement';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Info' element={<Info />}/>
          <Route path='/location/:id' element={<InfoLogement />}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
