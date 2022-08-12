import './App.scss';
import Home from './pages/Home';
import Info from './pages/Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Info' element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
