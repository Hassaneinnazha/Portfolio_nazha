import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Aboutus from './Components/Aboutus/Aboutus';
import Footer from './Components/Footer/Footer';

import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/ContactMe' element={<ContactMe/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
