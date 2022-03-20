import { React, useState ,input} from "react";
import Axios from "axios";
import "../App.css";
import { useParams } from "react-router-dom";

import Carousel from "react-elastic-carousel";
import Item from "./Item";


const ip = "192.168.0.243";
var start = 1;

function Home() {

  const { id } = useParams();

  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
    if (start === 1)
      Axios.get("http://" + ip + ":3001/company").then((response) => {
        setCompanyList(response.data);
        // alert(location.state.name);
        // alert(props.location.name)
        start = 0;
      });
  };


  return (

    <div className="App">
      <div className="App">

        <br />
        <br />
        {getCompany()}
        <Carousel
          itemPadding={[10, 10]}
          // pagination={false}
          showArrows={false}
          enableAutoPlay={true}
          itemsToShow={4}
          autoPlaySpeed={10000}
          itemsToScroll={4}
        >
          {companyList.map((val, key) => {
            return (
              <Item>
                {val.cp_name}
                <div className="info">
                  <a href={val.cp_link} target="_blank" className="bt">
                    Info
                  </a>
                </div>
              </Item>
            );
          })}
        </Carousel>
      </div>
      <br />
      <br />
      <br/>
      <Carousel
        itemPadding={[10, 10]}
        // pagination={false}
        showArrows={false}
        enableAutoPlay={true}
        itemsToShow={1}
        autoPlaySpeed={10000}
        itemsToScroll={1}
      >
        <img src={require('../images/News_3.png')} width="60%" height = "60%"draggable="false"/>
        <img src={require('../images/News_1.png')} width="60%" height = "60%"draggable="false"/>
        <img src={require('../images/News_2.png')} width="60%" height = "60%"draggable="false"/>

      </Carousel>
    </div>
  );
}

export default Home;
