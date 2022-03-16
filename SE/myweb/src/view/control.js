/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./home";
import Internship from "./internship";
import InternshipDoc_staff from "./internshipDoc_staff";
import Login from "./login";
import Add_internship from "./add_internship";
import { useParams } from "react-router-dom";

function Control(props) {
  const { id } = useParams();

  const [components, setcomponents] = useState(<Home />);

  useEffect(() => {
    if (props.start === "home-start") {
      setcomponents(<Home />);
    } else if (props.start === "internship-start") {
      setcomponents(<Login />);
    } else if (props.start === "signin-start") {
      setcomponents(<Login />);
    }
    //*?  ////////////////////////////////////// G
    else if (props.start === "home") {
      setcomponents(<Home />);
    } else if (props.start === "internship") {
      setcomponents(<Internship />);
    } else if (props.start === "signin") {
      setcomponents(<Login />);
    } else if (props.start === "newinternship") {
      setcomponents(<Add_internship />);
    }
    //*?  ////////////////////////////////////// N
    else if (props.start === "home-t") {
      setcomponents(<Home />);
    } else if (props.start === "internship-t") {
      setcomponents(<InternshipDoc_staff />);
    } else if (props.start === "signin") {
      setcomponents(<Login />);
    } 
    //*?  ////////////////////////////////////// T
  }, []);

  return (
    <div>
      <Navbar status={props.status} />
      {components}
    </div>
  );
}

export default Control;
