//import logo from "./logo.svg";
import "../App1.scss";
import Axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import "../modalstyles.css";
import Moment from "react-moment";

const ip = "192.168.0.239";
var start = 1;
var btn = 0 ;

function refreshPage() {
  window.location.reload(false);
}

export default function InternshipResult_Staff() {
  const [showModal, setModal] = useState(false);
  const [internshipResult, setinternshipResult] = useState([]);
  const [ModalValue, setModalValue] = useState([]);

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

  const updateStatus = (status, id , a) => {
    btn = a ;
    var details = document.getElementById('textinput').value ;
    Axios.put("http://" + ip + ":3001/update/internshipresult", {
      id: id,
      status: status,
      detail: details,
    }).then((response) => {});
    if(btn == 1){
      refreshPage()
    }
  };

  getResult();

  return (
    <div className="">
      <div className="modal_content">
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: "flex",
            },
            content: {
              width: 450,
              height: 430,
              alignItems: "center",
              justifyContent: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 25,
              // font-family: 'Fredoka', sans-serif;
            },
          }}
          contentLabel="Example Modal"
        >
          <div className="content-modal">
            <div>
              Date: {<Moment format="MM/DD/YYYY">{ModalValue.ir_date}</Moment>}{" "}
              <br />
              ID: {ModalValue.ln_id} <br />
              Name: {ModalValue.ln_name} <br />
              Company: {ModalValue.cp_name}<br/>
            </div>
            <div className="button-styles">
              <div className="btn-input1">
                <button
                  class="custom-btn btn-3"
                  onClick={() => updateStatus("accept", ModalValue.ir_id, 1)}
                >
                  <span>Approve</span>
                </button>
              </div>
              <div className="btn-input2">
                <button
                  class="custom-btn btn-3"
                  onClick={() => updateStatus("decline", ModalValue.ir_id , 1)}
                >
                  <span>Disapprove</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <a>เหตุผลการไม่อนุมัติ</a><br/>
              <textarea id="textinput" className="inputText_inModal" res ></textarea>
            </div>

          <div className="close-button">
            <div>
              <button class="custom-btn btn-3" onClick={closeModal}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </Modal>
      </div>

      <table>
        <thead>
          <tr>
          <th>Date</th>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>File</th>
            <th>Status</th>
            <th>Update status</th>
          </tr>
        </thead>
        <tbody>
          {internshipResult.map((val, key) => {
            return (
              <tr>
              <td>{<Moment format="DD/MM/YYYY">{val.ir_date}</Moment>}</td>
                <td>{val.ln_id}</td>
                <td>{val.ln_name}</td>
                <td>{val.cp_name}</td>
                <td>
                  <a href={val.ir_image} download={"internshipResult_"+val.ln_id+".pdf"}>
                  download
                  </a>
                </td>
                <td>
                  <p class={"status status-" + val.ir_status}>
                    {val.ir_status}
                  </p>
                </td>
                <td>
                  {" "}
                  <a onClick={() => openModal(val)}>Click</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
