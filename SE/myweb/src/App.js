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
        <Route path='/newinternshipresult/:id' element={<Control start="newinternshipresult" status="2"/>}  />

        <Route path='/new-t/:id' element={<Control start="home-t" status="3"/>}  />
        <Route path='/internship-t/:id' element={<Control start="internship-t" status="3"/>}  />
        <Route path='/signin-t/:id' element={<Control start="signin" status="3"/>}  />
        <Route path='/internship-r-t/:id' element={<Control start="internship-r-t" status="3"/>}  />
      </Routes>
    </Router>

  );
}


export default App;
