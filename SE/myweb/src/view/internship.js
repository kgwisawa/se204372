import { React, useState } from "react";
import "../style/internship.css";
import Axios from "axios";
const Icon = () => {
  if (true) {
    return (
      <img
        className="icon"
        src={require(".././images/padlock.png")}
        alt="icon"
      />
    );
  } else {
    return <div />;
  }
};
var start = 1;
const Internship = (props) => {
  const ip = "192.168.0.246";
  // var s = props.start;
  

const [companyList, setCompanyList] = useState([]);
const getCompany = () => {
  if( start === 1){
    Axios.get("http://" + ip + ":3001/company").then((response) => {
      setCompanyList(response.data);
      start = 0;
    });
  }

};



  return (
    <div>
      {/* /////////////////////head */}
      <div className="boxhead">
        <h1 className="head">Internship</h1>
      </div>

      {/* /////////////////////head */}
      <div className="boxdoc">
        <h1 className="doc">Documents</h1>
      </div>

      <div className="content">
        <boxcontent>
          <div className="boxct1">
            <contenttxt>ใบคำร้องขอฝึกงาน</contenttxt>
          </div>

          <div className="boxct2">
            <boxdownload>Download</boxdownload>
          </div>
        </boxcontent>

        <boxcontent>
          <div className="boxct1">
            <contenttxt>หนังสือขอความอนุเคราะห์</contenttxt>
          </div>

          <div className="boxct2">
            <boxdownload>
              <Icon />
              Download
            </boxdownload>
          </div>
        </boxcontent>

        <boxcontent>
          <div className="boxct1">
            <contenttxt>หนังสือส่งตัว</contenttxt>
          </div>

          <div className="boxct2">
            <boxdownload>
              <Icon />
              Download
            </boxdownload>
          </div>
        </boxcontent>
      </div>

      <div className="boxheadtable">
        <div className="headtable">
          <div>Status Document internship</div>
        </div>
        <div className="headtable">
          <div>Status Document internship</div>
        </div> 
      </div>
      
      <div className="boxtable">
          <div className="contable">
          <table class="content-table">
      {getCompany()}
  <thead>
    <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Points</th>
      <th>Team</th>
    </tr>
  </thead>
  <tbody>
  {companyList.map((val, key) => {
          return (
            // <div className="employee card">
            //   <div className="card-body text-left">
            //     <p className="card-text">id: {val.cp_id}</p>
            //     <p className="card-text">Name: {val.cp_name}</p>
            //     <p className="card-text">link: {val.cp_link}</p>
            // </div>
            // </div>
            <tr>
            <td>{val.cp_name}</td>
            <td>{val.cp_name}</td>
            <td>{val.cp_name}</td>
            <td>{val.cp_name}</td>
            </tr>
          );
        })}
    {/* <tr>
      <td>1</td>
      <td>Domenic</td>
      <td>88,110</td>
      <td>dcode</td>
    </tr>
    <tr class="active-row">
      <td>2</td>
      <td>Sally</td>
      <td>72,400</td>
      <td>Students</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nick</td>
      <td>52,300</td>
      <td>dcode</td>
    </tr> */}
  </tbody>
</table>
          </div>


      </div>
    </div>
  );
};

export default Internship;
