import { React, useState, useEffect } from "react";
import "../style/internship.css";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 10);
  console.log("page to reload");
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

const Internship = (props) => {
  const { id } = useParams();
  const ip = "localhost";
  // var s = props.start;

  const [data, setdata] = useState([]);
  const [dataresult, setdataresult] = useState([]);

  useEffect(() => {
    getinterndoc();
    getinternresult();
  }, []);

  function getinterndoc() {
    Axios.get("http://" + ip + ":3001/internshipdocument").then((response) => {
      const fdata = response.data;
      const itemdata = [];

      for (let i in fdata) {
        if (fdata[i].ln_id === id) {
          itemdata.push(fdata[i]);
        }
      }
      setdata(itemdata);
    });
  }

  function getinternresult() {
    Axios.get("http://" + ip + ":3001/internshipresult").then((response) => {
      const fdata = response.data;
      const itemdata = [];

      for (let i in fdata) {
        if (fdata[i].ln_id === id) {
          itemdata.push(fdata[i]);
        }
      }
      setdataresult(itemdata);
    });
  }

  return (
    <div className="bgimg">
      {/* /////////////////////head */}
      <div>
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
            <a
              href="https://bit.ly/3HPMQyY"
              target="_blank"
              className="boxdownload"
            >
              Download
            </a>
          </div>
        </boxcontent>

        <boxcontent>
          <div className="boxct1">
            <contenttxt>หนังสือขอความอนุเคราะห์</contenttxt>
          </div>

          <div className="boxct2">
          <a
              className="boxdownload"
            >
              <Icon/>
              Download
            </a>
          </div>
        </boxcontent>

        <boxcontent>
          <div className="boxct1">
            <contenttxt>หนังสือส่งตัว</contenttxt>
          </div>

          <div className="boxct2">
          <a
              className="boxdownload"
            >
              <Icon/>
              Download
            </a>

          </div>
        </boxcontent>
      </div>

      <div className="boxheadtable">
        <div className="headtable">
        <div className="box-head">
          <div className="txt-c">Internship document </div>
          <Link
            to={"/newinternship/" + id}
            className="add"
            onClick={refreshPage}
          >
            New
          </Link>
          </div>
        </div>
        <div className="headtable">
        <div className="box-head">
          <div className="txt-c">Internship result</div>
          <Link to={"/newinternshipresult/"+id} className="add" onClick={refreshPage} >
            New
          </Link>
        </div>
        </div>
      </div>

      <div className="boxtable">
        <div className="contable">
          <table class="content-table">
            <thead>
              <tr>
                <th className="txtheadtable">Date</th>
                <th className="txtheadtable">NameCompany</th>
                <th className="txtheadtable">Status</th>
                <th className="txtheadtable">reason</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, key) => {
                const status = "status status-" + val.id_status;
                if(val.cp_id !== "CP000"){
                return (
                  <tr>
                    <td className="txttable">{val.id_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">
                      <div className={status}>{val.id_status}</div>
                    </td>
                    <td className="txttable">{val.id_comment}</td>
                  </tr>
                );}else{
                  return (
                    <tr>
                      <td className="txttable">{val.id_date}</td>
                      <td className="txttable">{val.id_other}</td>
                      <td className="txttable">
                        <div className={status}>{val.id_status}</div>
                      </td>
                      <td className="txttable">{val.id_comment}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>

        <div className="contable">
          <table class="content-table">
            <thead>
              <tr>
                <th className="txtheadtable">Date</th>
                <th className="txtheadtable">NameCompany</th>
                <th className="txtheadtable">Status</th>
                <th className="txtheadtable">reason</th>
              </tr>
            </thead>
            <tbody>
              {dataresult.map((val, key) => {
                const status = "status status-" + val.ir_status;
                if(val.cp_id !== "CP000"){
                return (
                  <tr>
                    <td className="txttable">{val.ir_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">
                      <div className={status}>{val.ir_status}</div>
                    </td>
                    <td className="txttable">{val.ir_detail}</td>
                  </tr>
                );}else{
                  return (
                    <tr>
                    <td className="txttable">{val.ir_date}</td>
                    <td className="txttable">{val.ir_other}</td>
                    <td className="txttable">
                      <div className={status}>{val.ir_status}</div>
                    </td>
                    <td className="txttable">{val.ir_detail}</td>
                  </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Internship;
