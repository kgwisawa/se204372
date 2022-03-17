import React, { useEffect, useState, Component } from "react";
import "../style/add_internship.css";
import "react-dropdown/style.css";
// import { Checkbox } from 'react-native-paper';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import Dropdown from "react-dropdown";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";

const userData = [{ name: "ฝึกงาน" }, { name: "สหกิจศึกษา" }];

function Add_internship() {
  const navigate = useNavigate();

  const { id } = useParams();
  const start = moment().format("DD/MM/YYYY");
  const [company, setcompany] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  function setcp(data) {
    // alert(companyList[0].cp_name );
    for (let i in companyList) {
      if (companyList[i].cp_name === data) {
        setcp_id(companyList[i].cp_id);
        // alert(companyList[i].cp_id)
      }
    }
  }

  const getCompany = () => {
    Axios.get("http://" + ip + ":3001/company").then((response) => {
      setCompanyList(response.data);
      for (let i in companyList) {
        // alert(companyList[i].cp_name)
        company.push(companyList[i].cp_name);
      }
      // alert(companyList[0].cp_name)
    });
  };

  function setcom() {
    for (let i in companyList) {
      // alert(companyList[i].cp_name)
      company.push(companyList[i].cp_name);
    }
    return company;
  }
  const [cp_name, setcp_name] = useState("");

  const [id_date, setid_date] = useState(start);
  const [id_confirm, setid_confirm] = useState("-");
  const [id_file, setid_file] = useState("-");
  const [cp_id, setcp_id] = useState("CP001");
  const [ln_id, setln_id] = useState(id);

  const [id_status, setid_status] = useState("pending");
  const [id_position, setid_position] = useState("");
  const [id_sdate, setid_sdate] = useState("");
  const [id_edate, setid_edate] = useState("");
  const [id_year, setid_year] = useState("");

  const [internship, setinternship] = useState([]);

  const [users, setUsers] = useState([]);
  const [baseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const ip = "192.168.0.239";

  const addinternship = () => {
    Axios.post("http://" + ip + ":3001/create/internshipresult", {
      ln_id: ln_id,
      ir_date: id_date,
      cp_id: cp_id,
      ir_image: baseImage,
      ir_status: id_status,
    }).then(() => {
      setinternship([
        ...internship,
        {
          ln_id: ln_id,
          ir_date: id_date,
          cp_id: cp_id,
          ir_image: baseImage,
          ir_status: id_status,
        },
      ]);
    });

    alert("submit successful");
    navigate("/internship/" + id);
  };

  useEffect(() => {
    setUsers(userData);
    getCompany();
    // alert(start)
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    let tempUser = users.map((user) =>
      user.name === name
        ? { ...user, isChecked: checked }
        : { ...user, isChecked: null }
    );
    setUsers(tempUser);
  };

  return (
    <div className="form-box-in2">
      <h1>Apply Internship</h1>

      <form action="">
        <div className="checkbox-style-in">
          {users.map((user, index) => (
            <div className="form-check-in" key={index}>
              <input
                type="checkbox"
                className="form-check-input-in"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label className="form-check-label-in ms-2">{user.name}</label>
            </div>
          ))}
        </div>
        <br />
        {/* <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setid_position(event.target.value);
            }}
          />
          <span></span>
          <label>Position</label>
        </div> */}

        <div>
          <Dropdown
            options={setcom()}
            placeholder="Select Company"
            onChange={(event) => {
              setcp(event.value);
            }}
          />
        </div>

        {/* <div className="txt_field-in">
        <label>Start Date</label>
          <input
            type={"date"}
            required
            className="date-input"
            onChange={(event) => {
              setid_sdate(event.target.value);
            }}
          />
          <span></span>

        </div> */}

        {/* <div className="txt_field-in">
          <input
            type={"date"}
            required
            className="date-input"
            onChange={(event) => {
              setid_edate(event.target.value);
            }}
          />
          <span></span>
          <label>End Date</label>
        </div> */}

        {/* <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setid_year(event.target.value);
            }}
          />
          <span></span>
          <label>Year</label>
        </div> */}
        <br />
        <div>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
        </div>

        <div className="button-st-in">
          <div className="box">
            <input type={"submit"} value="Apply" onClick={addinternship} />
          </div>

          <Link to="/new" className="btCancel">
            Cancel
          </Link>
          {/* <input type={"submit"} value="Cancel" /> */}
        </div>
      </form>
    </div>
  );
}

export default Add_internship;
