import { React, useState } from "react";
import "../style/internship.css";
import { Link,useParams } from "react-router-dom";
import Axios from "axios";



function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 10);
  console.log('page to reload')
}

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

// function test(id){
//   alert(id);
// }

var start = 1;
const Internship = (props) => {

  const { id } = useParams();
  const ip = "192.168.0.246";
  // var s = props.start;

  const [data, setdata] = useState([]);
  const getCompany = () => {
    if (start === 1) {
      Axios.get("http://" + ip + ":3001/internshipinsit").then((response) => {
        
        setdata(response.data);
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
          <Link to="/newinternship" className="add" onClick={refreshPage} >
            New
          </Link>
        </div>
        <div className="headtable">
          <div>Internship result</div>
          <Link to="/new" className="add" >
            New
          </Link>
        </div>
      </div>

      <div className="boxtable">
        <div className="contable">
          <table class="content-table">
            {getCompany()}
            <thead>
              <tr>
                <th className="txtheadtable">Date</th>
                <th className="txtheadtable">NameCompany</th>
                <th className="txtheadtable">Status</th>
                <th className="txtheadtable">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr>
                    <td className="txttable">{val.id_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">{val.id_status}</td>
                    <td>
                      <Link
                        to="/new"
                        params={{ id: val.id_id }}
                        className="btDelete"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="contable">
          <table class="content-table">
            {getCompany()}
            <thead>
              <tr>
                <th className="txtheadtable">Date</th>
                <th className="txtheadtable">NameCompany</th>
                <th className="txtheadtable">Status</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                return (
                  <tr>
                    <td className="txttable">{val.id_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">{val.id_status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Internship;
