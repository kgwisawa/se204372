import {React} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/home';
import Internship from './view/internship';
import Login from './view/login';
import './App.css';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
        <Route path='/new' element={<Home/>}  />
        <Route path='/internship' element={<Internship/>}  />
        <Route path='/signin' element={<Login/>}  />
      </Routes>
    </Router>

  );
}


export default App;
