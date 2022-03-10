/* eslint-disable react/jsx-pascal-case */
import {React} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Control from './view/control';
import './App.css';
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Control start="home-start" />} /> 
        <Route path='/new-start' element={<Control start="home-start" />}  />
        <Route path='/internship-start' element={<Control start="internship-start" />}  />
        <Route path='/signin-start' element={<Control start="signin-start"/>}  />
        <Route path='/newinternship' element={<Control start="newinternship"/>}  />
      </Routes>
    </Router>

  );
}


export default App;
