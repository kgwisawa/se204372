import { React, useState } from "react";
import Axios from "axios";
import "../App.css";

import Carousel from "react-elastic-carousel";
import InfiniteCarousel from 'react-leaf-carousel';
import Item from "./Item";
const ip = "192.168.0.246";
var start = 1;

function Home() {
  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
    if(start === 1)
    Axios.get("http://" + ip + ":3001/company").then((response) => {
      setCompanyList(response.data);
      start = 0;
    });

  };

  return (
    <div className="App">
    <div className="App">
      <br />
      {getCompany()}
      <Carousel
        itemPadding={[10, 10]}
        pagination={false}
        showArrows={false}
        enableAutoPlay={true}
        itemsToShow={4}
        autoPlaySpeed={10000}
        itemsToScroll={4}
      >
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
    <br/>
    <br/>
    <h3>News</h3>
    <Carousel
        itemPadding={[10, 10]}
        pagination={false}
        showArrows={false}
        enableAutoPlay={true}
        itemsToShow={1}
        autoPlaySpeed={20000}
        itemsToScroll={1}
      >
      <Item><h1>k1</h1></Item>
      <Item><h1>k2</h1></Item>
      <Item><h1>k3</h1></Item>
      <Item><h1>k4</h1></Item>
      <Item><h1>k5</h1></Item>
      <Item><h1>k6</h1></Item>
      <Item><h1>k7</h1></Item>
      <Item><h1>k8</h1></Item>
    </Carousel>
    </div>
  );
}

export default Home;
