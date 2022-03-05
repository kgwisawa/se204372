import {React} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/home';
import About from './view/about';
import Services from './view/about';
import Contact from './view/about';
import SignUp from './view/about';
import './App.css';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>}  />
      </Routes>
    </Router>

  );
}


export default App;
