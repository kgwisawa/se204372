import { React, useState } from "react";
import Axios from "axios";
import "../App.css";

import Carousel from "react-elastic-carousel";
import InfiniteCarousel from 'react-leaf-carousel';
import Item from "./Item";
const ip = "192.168.0.246";

function Home() {
  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
    Axios.get("http://" + ip + ":3001/company").then((response) => {
      setCompanyList(response.data);
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
        autoPlaySpeed={1500}
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
    <br/>
    <h1>Kuyyyy</h1>
    <InfiniteCarousel breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={1}
    scrollOnDevice={true}>
      <Item><h1>k1</h1></Item>
      <Item><h1>k2</h1></Item>
      <Item><h1>k3</h1></Item>
      <Item><h1>k4</h1></Item>
      <Item><h1>k5</h1></Item>
      <Item><h1>k6</h1></Item>
      <Item><h1>k7</h1></Item>
      <Item><h1>k8</h1></Item>
    </InfiniteCarousel>
    </div>
  );
}

export default Home;
