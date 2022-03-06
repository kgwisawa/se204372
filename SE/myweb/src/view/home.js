import {React, useState } from "react";
import Axios from "axios";
import "../App.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
function Home() {

    const [companyList, setCompanyList] = useState([]);
    const getCompany = () => {
      Axios.get("http://localhost:3001/company").then((response) => {
        setCompanyList(response.data);
      });
    };
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ];
  return (
    <div className="App">
      <br/>
      {getCompany()}
      <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true}>
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
        </Carousel>
    </div>
  )
}

export default Home