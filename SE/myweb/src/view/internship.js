import { React, useState ,useEffect} from "react";
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


const Internship = (props) => {

  const { id } = useParams();
  const ip = "192.168.0.239";
  // var s = props.start;

  const [data, setdata] = useState([]);
  const [dataresult, setdataresult] = useState([]);


  useEffect(() => {
    getinterndoc();
    getinternresult();

  }, []);


  function getinterndoc ()  {
      Axios.get("http://" + ip + ":3001/internshipdocument").then((response) => {

      const fdata = response.data;
      const itemdata = [];

      for(let i in fdata){

        if(fdata[i].ln_id === id){
          itemdata.push(fdata[i]);
        }
      }
      setdata(itemdata);
      });
  };


  function getinternresult ()  {
    Axios.get("http://" + ip + ":3001/internshipresult").then((response) => {

    const fdata = response.data;
    const itemdata = [];

    for(let i in fdata){

      if(fdata[i].ln_id === id){
        itemdata.push(fdata[i]);
      }
    }
    setdataresult(itemdata);
    });
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
          <Link to={"/newinternship/"+id} className="add" onClick={refreshPage} >
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
                return (
                  <tr>
                    <td className="txttable">{val.id_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">{val.id_status}</td>
                    <td className="txttable">{val.id_comment}</td>
                  </tr>
                );
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

              </tr>
            </thead>
            <tbody>
              {dataresult.map((val, key) => {
                return (
                  <tr>
                    <td className="txttable">{val.ir_date}</td>
                    <td className="txttable">{val.cp_name}</td>
                    <td className="txttable">{val.ir_status}</td>
                    
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
