import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import '../../style/Navbar.css'

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 10);
  console.log('page to reload')
}

const Navbar = () => {
  return (
    <>
      <Nav>
      
        <NavLink to='/' onClick={refreshPage}>
          <img src={require('../../images/KU Internship.png')} alt='logo' />
       </NavLink>
     
      <box>
        <Bars />
        <NavMenu>
          <NavLink to='/new' activeStyle onClick={refreshPage} >
          
            <textnav>News</textnav>
          </NavLink>
          <NavLink to='/internship' activeStyle onClick={refreshPage} >
          <textnav  >Internship</textnav>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </box>
      </Nav>
    </>
  );
};

export default Navbar;