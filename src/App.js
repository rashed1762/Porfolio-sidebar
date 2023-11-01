import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navcomp from './Pages/Nav/Navcomp';
import About from './Pages/About/About';
import Portfolios from './Pages/Portfolios/Portfolios';
import Workservice from './Pages/WorkService/Workservice';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
     <Navcomp></Navcomp>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route> 
      <Route path='/service' element={<Workservice></Workservice>}></Route> 
      <Route path='/portfolio' element={<Portfolios></Portfolios>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/footer' element={<Footer></Footer>}></Route>
      
     </Routes>
  
     
     
    </div>
  );
}

export default App;
