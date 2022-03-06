import {React, useState } from "react";
import Axios from "axios";
import "../App.css";

import Item from "./Item";
function Home() {

    const [companyList, setCompanyList] = useState([]);
    const getCompany = () => {
      Axios.get("http://localhost:3001/company").then((response) => {
        setCompanyList(response.data);
      });
    };
    
  return (
    <div className="App">
      <br/>
      {getCompany()}
        {companyList.map((val, key) => {
          return (
            // <div className="employee card">
            //   <div className="card-body text-left">
            //     <p className="card-text">id: {val.cp_id}</p>
            //     <p className="card-text">Name: {val.cp_name}</p>
            //     <p className="card-text">link: {val.cp_link}</p>
            // </div>
            // </div>
            <Item>{val.cp_name}</Item>
          );
        })}
    </div>
  )
}

export default Home