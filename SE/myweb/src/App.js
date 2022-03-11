/* eslint-disable react/jsx-pascal-case */
import {React} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Control from './view/control';

import './App.css';
function App() {


  return (
    <Router>
      <Routes>
      <Route path='/project/65_memo_care' exact element={<Control start="signin-start" status="1" />} /> 
        <Route path='/new-start' element={<Control start="home-start" status="1"/>}  />
        <Route path='/internship-start' element={<Control start="internship-start" status="1"/>}  />
        <Route path='/signin-start' element={<Control start="signin-start" status="1"/>}  />


        <Route path='/new/:id' element={<Control start="home" status="2"/>}  />
        <Route path='/internship/:id' element={<Control start="internship" status="2"/>}  />
        <Route path='/signin/:id' element={<Control start="signin" status="2"/>}  />
        <Route path='/newinternship/:id' element={<Control start="newinternship" status="2"/>}  />
      </Routes>
    </Router>

  );
}


export default App;
