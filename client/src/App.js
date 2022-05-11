import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx';
import NewDog from './Components/NewDog.jsx';
import Detail from './Components/Detail.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route exact path='/' element= {<LandingPage/>}/>
            <Route exact path='/home' element= {<Home/>}/>
            <Route exact path='/dog' element= {<NewDog/>}/> 
            <Route exact path='/dogs/:id' element= {<Detail/>}/> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
