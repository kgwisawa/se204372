import { React, useState ,input} from "react";
import Axios from "axios";
import "../App.css";

import Carousel from "react-elastic-carousel";
import Item from "./Item";


const ip = "192.168.0.246";
var start = 1;

function Home() {
  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
    if (start === 1)
      Axios.get("http://" + ip + ":3001/company").then((response) => {
        setCompanyList(response.data);
        // alert(response.data)
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
      <h3>News</h3>
      <Carousel
        itemPadding={[10, 10]}
        // pagination={false}
        showArrows={false}
        enableAutoPlay={true}
        itemsToShow={1}
        autoPlaySpeed={10000}
        itemsToScroll={1}
      >
        <img src={require('../images/News_1.jpg')} width="900" height ="400"/>
        <img src={require('../images/News_2.jpg')} width="900" height ="400"/>
        <img src={require('../images/News_3.jpg')} width="900" height ="400"/>

      </Carousel>
    </div>
  );
}

export default Home;
