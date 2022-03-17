//import logo from "./logo.svg";
import "../App1.scss";
import Axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import "../modalstyles.css";
import Moment from "react-moment";

const ip = "192.168.0.239";
var start = 1;
var btn = 0;

function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 100);
}

export default function InternshipResult_Staff() {
  const [showModal, setModal] = useState(false);
  const [internshipResult, setinternshipResult] = useState([]);
  const [ModalValue, setModalValue] = useState([]);
  const [comment , setComment] = useState("");

  const openModal = (val) => {
    setModalValue(val);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getResult = () => {
    if (start === 1)
      Axios.get("http://" + ip + ":3001/internshipresult").then((response) => {
        setinternshipResult(response.data);
        start = 0;
      });
  };

  const updateStatus = (status, id, a) => {
    btn = a;

    Axios.put("http://" + ip + ":3001/update/internshipresult", {
      id: id,
      status: status,
      detail: comment,
    }).then((response) => {});
    if (btn == 1) {
      refreshPage();
    }
  };

  const checkcomment = (id) => {

    if (comment !== "") {
      updateStatus("decline", id , 1);
      closeModal();
    } else {
      alert("กรุณากรอกเหตุผล");
    }
  };

  getResult();

  return (
    <div className="index">
      <div className="Modal_styles">
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: "flex",
            },
            content: {
              width: "40%",
              height: "75%",
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
        <br/>
          <div className="text_detail">
            <div className="contxtm">
              <h4 className="txtm">Date:</h4>
              <h4 className="txtm2">{<Moment format="MM/DD/YYYY">{ModalValue.ir_date}</Moment>}</h4>
            </div>

            <div className="contxtm">
              <h4 className="txtm">ID:</h4>
              <h4 className="txtm2">{ModalValue.ln_id}</h4>
            </div>

            <div className="contxtm">
              <h4 className="txtm">Name:</h4>
              <h4 className="txtm2">{ModalValue.ln_name}</h4>
            </div>

            <div className="contxtm">
              <h4 className="txtm">Company:</h4>
              <h4 className="txtm2">{ModalValue.cp_name}</h4>
            </div>


          </div>
          <div className="reasont">
            <a>เหตุผลการไม่อนุมัติ</a>

          </div>
          <br />
          <textarea
              id="textinput"
              className="reason"
              onChange={(event) => setComment(event.target.value)}
          ></textarea>
          <div className="btn_styles">
              <div className="btn-accept">
                <button
                  class="custom-btn1"
                  onClick={() => updateStatus("accept", ModalValue.ir_id, 1)}
                >
                  <span>Accept</span>
                </button>
              </div>
              <div className="btn-decline">
                <button
                  class="custom-btn2"
                  onClick={() => [checkcomment(ModalValue.ir_id)]}
                >
                  <span>Decline</span>
                </button>
              </div>
            </div>

          <br />
          <div className="btn-close">
            <div>
              <button class="custom-btclo" onClick={closeModal}>
                <span>Close</span>
              </button>
            </div>
          </div>
          </div>
        </Modal>
      </div>

      <table className="tableinstaff">
        <thead className="theadinstaff">
          <tr>
            <th className="thinstaff">Date</th>
            <th className="thinstaff">ID</th>
            <th className="thinstaff">Name</th>
            <th className="thinstaff">Company</th>
            <th className="thinstaff">File</th>
            <th className="thinstaff">Status</th>
            <th className="thinstaff">Update status</th>
          </tr>
        </thead>
        <tbody>
          {internshipResult.map((val, key) => {
            return (
              <tr>
                <td className="tdinstaff">
                  {<Moment format="DD/MM/YYYY">{val.ir_date}</Moment>}
                </td>
                <td className="tdinstaff">{val.ln_id}</td>
                <td className="tdinstaff">{val.ln_name}</td>
                <td className="tdinstaff">{val.cp_name}</td>
                <td className="tdinstaff">
                  <a
                    className="ainstaff"
                    href={val.ir_image}
                    download={"internshipResult_" + val.ln_id + ".pdf"}
                  >
                    download
                  </a>
                </td>
                <td className="tdinstaff">
                  <p class={"status status-" + val.ir_status}>
                    {val.ir_status}
                  </p>
                </td>
                <td className="tdinstaff">
                  {" "}
                  <a className="ainstaff" onClick={() => openModal(val)}>
                    Click
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
