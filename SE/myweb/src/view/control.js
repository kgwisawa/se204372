/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Home from './home';
import Internship from './internship';
import Login from "./login";
import Add_internship from "./add_internship";

function Control(props) {

    const [components, setcomponents] = useState(<Home/>);

    useEffect(() => {
     
            if(props.start === 'home-start'){
              setcomponents(<Home/>);
            }
            else if(props.start === 'internship-start'){
              setcomponents(<Login/>);
            }
            else if(props.start === 'internship'){
              setcomponents(<Internship/>);
            }
            else if(props.start === 'signin-start'){
              setcomponents(<Login/>);
            }
            else if(props.start === 'newinternship'){
              setcomponents(<Add_internship/>);
            }
      }, []);

  return (
    <div>
        <Navbar/>
        {components}
    </div>
  )
}

export default Control;