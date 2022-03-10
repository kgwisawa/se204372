import React, { useEffect, useState } from "react";
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



const Navbar = (props) => {
  const status = props.status;
  const [pathh, setpathh] = useState("");
  const [pathin, setpathin] = useState("");
  const [path, setpath] = useState("");
  const [text, settext] = useState("");

  // function setstatus(){
  //   if(status === '2' || '3'){
  //     status = 1;
  //   }
  // }

  useEffect(() => {

    if(status === '1'){
      setpathh('/new-start')
      setpathin('/internship-start');
      setpath('/signin-start');
      settext('Sign in');

    }else if(status === '2'){
      setpathh('/new')
      setpathin('/internship');
      setpath('/new-start');
      settext('Sign Out')
    }else{
      setpath('/signin');
      settext('Sign Out')
    }
  }, []);




  return (
    <>

      <Nav>
      
        <NavLink to='/' onClick={refreshPage}>
          <img src={require('../../images/KU Internship.png')} alt='logo' />
       </NavLink>
     
      <box>
        <Bars />
        <NavMenu>
          <NavLink to={pathh} activeStyle onClick={refreshPage} >
          
            <textnav>News</textnav>
          </NavLink>
          <NavLink to={pathin} activeStyle onClick={refreshPage} >
          <textnav  >Internship</textnav>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
  
         <NavBtnLink to={path}  onClick={refreshPage} >{text}</NavBtnLink>
        </NavBtn>
      </box>
      </Nav>
    </>
  );
};

export default Navbar;