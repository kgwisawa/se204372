 import "../intern2.scss";
import Modal from "react-modal";
import { useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ip = "192.168.0.239";
var start = 1;
function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 100);
  console.log("page to reload");
}

export default function InternshipDoc_staff() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateid, setUpdateid] = useState([]);
  const [internshipdocumentList, setInternshipdocumentList] = useState([]);
  const [namefile, setNamefile] = useState("");
  const [newComment, setNewComment] = useState("-");
  const fileterlist = ["ทั้งหมด", "สถานะ", "วันที่ยืนขอ", "ปีการศึกษา"];
  const [fileternow, setFileternow] = useState("ทั้งหมด");
  const [searchKey, setSearchKey] = useState("");
  const [dropdown, setDropdown] = useState("ทั้งหมด");

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
    <div className="inbox">
      <div className="boxsearch">
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
      <div className="Modal_styles">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: "flex",
            },
            content: {
              width: 550,
              height: 550,
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
              <h4>Date(M/D/Y): {updateid.id_date}</h4>
              <h4>NisitID: {updateid.ln_id}</h4>
              <h4>Name: {updateid.ln_name}</h4>
              <h4>Company: {updateid.cp_name}</h4>
              <h4>Position: {updateid.id_position}</h4>
              <h4>Start Date: {updateid.id_sdate}</h4>
              <h4>End Date: {updateid.id_edate}</h4>
              <br />
              <h4>Download File:</h4>
              <a href={updateid.id_file} download={namefile}>
                {updateid.ln_id}_{updateid.ln_name}
              </a>
            </div>
            <br />
            <label for="comment">เหตุผล:</label>
            <br />
            <textarea
              id="comment"
              name="comment"
              style={{ resize: "none", width: "350px", height: "120px" }}
              onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <br />
            <i>เหตุผลเดิม:{updateid.id_comment}</i>
            <br />
            <br />
            <div className="btn_styles">
              <div className="btn-accept">
                <button
                  className="custom-btn btn-3"
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
                  className="custom-btn btn-3"
                  onClick={() => [checkcomment(updateid.id_id)]}
                >
                  <span>Decline</span>
                </button>
              </div>
            </div>

            <br />
            <div className="btn-close">
              <button className="custom-btn btn-3" onClick={closeModal}>
                <span>close</span>
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <table className="tableinstaff">
        <thead className="theadinstaff">
          <tr>
            <th className="thinstaff">Year</th>
            <th className="thinstaff">Date(M/D/Y)</th>
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
                <td class={status}>{val.id_status}</td>
                <td>
                  <a onClick={() => openModal(val)} className="ainstaff">click</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
