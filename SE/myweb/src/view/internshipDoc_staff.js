import "../intern2.scss";
import Modal from "react-modal";
import { useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link, useParams } from "react-router-dom";

const ip = "localhost";
var start = 1;
function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 100);
  console.log("page to reload");
}

function refreshPage1() {
  window.location.reload(false);
}

export default function InternshipDoc_staff(props) {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateid, setUpdateid] = useState([]);
  const [internshipdocumentList, setInternshipdocumentList] = useState([]);
  const [namefile, setNamefile] = useState("");
  const [newComment, setNewComment] = useState("-");
  const fileterlist = ["ทั้งหมด", "สถานะ", "วันที่ยืนขอ", "ปีการศึกษา"];
  const [fileternow, setFileternow] = useState("ทั้งหมด");
  const [searchKey, setSearchKey] = useState("");
  const [dropdown, setDropdown] = useState("ทั้งหมด");
  const[company,setCompany] =useState("");
  const getCompany = () => {
    if (start === 1) {
      Axios.get("http://" + ip + ":3001/internshipdocument").then(
        (response) => {
          setInternshipdocumentList(response.data);
          // alert(response.data)
          start = 0;
        }
      );
    }
  };
  const searchbar = (key, data) => {
    if (key !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(key.toLowerCase());
      });
      setInternshipdocumentList(filteredData);
    } else {
      setInternshipdocumentList(data);
    }
  };
  const searchfilter = (filter, key) => {
    if (filter == "ทั้งหมด") {
      Axios.get("http://" + ip + ":3001/internshipdocument").then(
        (response) => {
          // setInternshipdocumentList(response.data);
          searchbar(key, response.data);
          // alert(response.data)
        }
      );
    } else if (filter == "สถานะ") {
      Axios.get("http://" + ip + ":3001/internshipdocument/orderstatus").then(
        (response) => {
          // setInternshipdocumentList(response.data)
          searchbar(key, response.data);
          // alert(response.data)
        }
      );
    } else if (filter == "วันที่ยืนขอ") {
      Axios.get("http://" + ip + ":3001/internshipdocument/orderdate").then(
        (response) => {
          // setInternshipdocumentList(response.data);
          searchbar(key, response.data);
          // alert(response.data)
        }
      );
    } else if (filter == "ปีการศึกษา") {
      Axios.get("http://" + ip + ":3001/internshipdocument/orderyear").then(
        (response) => {
          // setInternshipdocumentList(response.data)
          searchbar(key, response.data);
          // alert(response.data)
        }
      );
    }
  };
  function openModal(val) {
    if(val.cp_id !== "CP000"){
      setCompany(val.cp_name);
    }else{
      setCompany(val.id_other)
    }
    setIsOpen(true);
    setUpdateid(val);
    setNamefile(val.ln_id + "_" + val.ln_name + ".pdf");
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateFile = (status, id_id) => {
    Axios.put("http://" + ip + ":3001/update/internshipdocument", {
      id: id_id,
      id_comment: newComment,
      status: status,
    });
  };
  const checkcomment = (id) => {
    if (newComment !== "-") {
      updateFile("decline", id);
      closeModal();
      refreshPage();
    } else {
      alert("กรุณากรอกเหตุผล");
    }
  };
  return (
    <div className="bgimgindoc">
    <div >
      <div className="boxsearch">
      <div className="box-s">
        <div className="txtco">Filter</div>
        <div className="searchfilter">
          <Dropdown
            options={fileterlist}
            placeholder="ทั้งหมด"
            onChange={(event) => [
              searchfilter(event.value, searchKey),
              setDropdown(event.value),
            ]}
          />
        </div>
        <div className="searchbar">
          <input
            type="text"
            className="searchbar"
            placeholder="Search.."
            onChange={(event) => [
              setSearchKey(event.target.value),
              searchfilter(dropdown, event.target.value),
            ]}
          ></input>
        </div>
      </div>
        
        <div className="btn_linkr">
          <Link
            to={"/internship-r-t/" + id}
            className="Link_btnr"
            onClick={refreshPage}
          >
            InternShip Result
          </Link>
        </div>
      </div>
      <div className="Modal_styles">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: "flex",
            },
            content: {
              width: "40%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 25,
            },
          }}
          contentLabel="Example Modal"
        >
          <div className="">
            <br />
            <div className="text_detail">
              {/* {updateid.id_id} */}
              <div className="contxtm">
                <h4 className="txtm">Date(M/D/Y)</h4>
                <h4 className="txtm2">{updateid.id_date}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">NisitID</h4>
                <h4 className="txtm2">{updateid.ln_id}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">Name</h4>
                <h4 className="txtm2">{updateid.ln_name}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">Company</h4>
                <h4 className="txtm2">{company}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">Position</h4>
                <h4 className="txtm2">{updateid.id_position}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">Start Date</h4>
                <h4 className="txtm2">{updateid.id_sdate}</h4>
              </div>

              <div className="contxtm">
                <h4 className="txtm">End Date</h4>
                <h4 className="txtm2">{updateid.id_edate}</h4>
              </div>

              <br />
              <div className="contxtm">
                <a
                  className="btfile"
                  href={updateid.id_file}
                  download={namefile}
                >
                  DownloadFile {updateid.ln_id}_{updateid.ln_name}
                </a>
              </div>
            </div>
            <br />
            <label for="comment" className="reasont">
              เหตุผล:
            </label>
            <br />
            <textarea
              id="comment"
              name="comment"
              className="reason"
              onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <br />
            <i>เหตุผลเดิม:{updateid.id_comment}</i>
            <br />
            <br />
            <div className="btn_styles">
              <div className="btn-accept">
                <button
                  className="custom-btn1 "
                  onClick={() => [
                    updateFile("accept", updateid.id_id),
                    closeModal(),
                    refreshPage(),
                  ]}
                >
                  <span>Accept</span>
                </button>
              </div>

              <br />
              <div className="btn-decline">
                <button
                  className="custom-btn2 "
                  onClick={() => [checkcomment(updateid.id_id)]}
                >
                  <span>Decline</span>
                </button>
              </div>
            </div>

            <br />
            <div className="btn-close">
              <button className="custom-btclo" onClick={closeModal}>
                <span>close</span>
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <div className="content">
        <table className="tableinstaff">
          <thead className="theadinstaff">
            <tr>
              <th className="thinstaff">Year</th>
              <th className="thinstaff">Date(D/M/Y)</th>
              <th className="thinstaff">NisitID</th>
              <th className="thinstaff">Name</th>
              <th className="thinstaff">Company</th>
              <th className="thinstaff">Position</th>
              <th className="thinstaff">File</th>
              <th className="thinstaff">Status</th>
              <th className="thinstaff">Update Status</th>
            </tr>
          </thead>
          <tbody>
            {getCompany()}
            {internshipdocumentList.map((val, key) => {
              const name = val.ln_id + "_" + val.ln_name + ".pdf";
              const status = "status status-" + val.id_status;
              if(val.cp_id !== "CP000"){
              return (
                <tr>
                  <td className="tdinstaff">{val.id_year}</td>
                  <td className="tdinstaff">{val.id_date}</td>
                  <td className="tdinstaff">{val.ln_id}</td>
                  <td className="tdinstaff">{val.ln_name}</td>
                  <td className="tdinstaff">{val.cp_name}</td>
                  <td className="tdinstaff">{val.id_position}</td>
                  <td className="tdinstaff">
                    <a href={val.id_file} download={name} className="ainstaff">
                      download
                    </a>
                  </td>
                  <td className="tdinstaff">
                    <div className={status}>{val.id_status}</div>
                  </td>
                  <td>
                    <a onClick={() => openModal(val)} className="ainstaff">
                      click
                    </a>
                  </td>
                </tr>
              );
              }else if(val.cp_id == "CP000"){
                return(
                <tr>
                <td className="tdinstaff">{val.id_year}</td>
                <td className="tdinstaff">{val.id_date}</td>
                <td className="tdinstaff">{val.ln_id}</td>
                <td className="tdinstaff">{val.ln_name}</td>
                <td className="tdinstaff">{val.id_other}</td>
                <td className="tdinstaff">{val.id_position}</td>
                <td className="tdinstaff">
                  <a href={val.id_file} download={name} className="ainstaff">
                    download
                  </a>
                </td>
                <td className="tdinstaff">
                  <div className={status}>{val.id_status}</div>
                </td>
                <td>
                  <a onClick={() => openModal(val)} className="ainstaff">
                    click
                  </a>
                </td>
              </tr>)
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
