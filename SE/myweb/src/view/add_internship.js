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
  const [year, setYear] = useState([]);
  const [pickYear, setPickYear] = useState("");

  const [nisitinfo, setnisitinfo] = useState([]);

  const getinfo = () => {
    Axios.get("http://" + ip + ":3001/loginnisit").then((response) => {
      const data = response.data;
      for (let i in data) {
        if (data[i].ln_id == id) {
          setnisitinfo(data[i]);
          // alert(data[i].ln_name)
          return;
        }
      }
    });
  };

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
      let set = true;
      for (let j in company) {
      if(companyList[i].cp_name === company[j]){
        set = false;
      }
      }
      if(set){
        company.push(companyList[i].cp_name);
      }
    }
    return company;
  }
  const [cp_name, setcp_name] = useState("");
  const [othercp, setothercp] = useState("");
  const [id_date, setid_date] = useState(start);
  const [id_confirm, setid_confirm] = useState("-");
  const [id_file, setid_file] = useState("-");
  const [id_tfile1, setid_tfile1] = useState("-");
  const [id_tfile2, setid_tfile2] = useState("-");
  const [cp_id, setcp_id] = useState(null);
  const [ln_id, setln_id] = useState(id);

  const [id_status, setid_status] = useState("pending");
  const [id_position, setid_position] = useState(null);
  const [id_sdate, setid_sdate] = useState("");
  const [id_edate, setid_edate] = useState("");
  const [id_year, setid_year] = useState(null);

  const [internship, setinternship] = useState([]);

  const [users, setUsers] = useState([]);
  const [baseImage, setBaseImage] = useState(null);
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

  const other = (type) => {
    if(type === "CP000"){
      return (
        <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setothercp(event.target.value);
            }}
          />
          <span></span>
          <label>Other</label>
        </div>
      );
    }
    else{
      return;
    }

  };

  const ip = "192.168.0.243";

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 100);
    console.log("page to reload");
  }

  const addinternship = () => {
    if (
      cp_id == null ||
      baseImage == null ||
      id_position == null ||
      id_year == null
    ) {
      return;
    }

    Axios.post("http://" + ip + ":3001/create/internshipdocument", {
      ln_id: ln_id,
      id_date: id_date,
      cp_id: cp_id,
      id_position: id_position,
      id_sdate: id_sdate,
      id_edate: id_edate,
      id_file: baseImage,
      id_tfile1: id_tfile1,
      id_tfile2: id_tfile2,
      id_status: id_status,
      id_confirm: id_confirm,
      id_year: id_year,
      id_other:othercp
    }).then(() => {
      setinternship([
        ...internship,
        {
          ln_id: ln_id,
          id_date: id_date,
          cp_id: cp_id,
          id_position: id_position,
          id_sdate: id_sdate,
          id_edate: id_edate,
          id_file: baseImage,
          id_tfile1: id_tfile1,
          id_tfile2: id_tfile2,
          id_status: id_status,
          id_confirm: id_confirm,
          id_year: id_year,
          id_other:othercp
        },
      ]);
    });
    alert("submit successful");
    navigate("/internship/" + id);
  };

  useEffect(() => {
    setUsers(userData);
    getCompany();
    selectYear();
    getinfo();
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

  const FormatDateS = (sdate) => {
    var s = moment(sdate).format("DD/MM/YYYY");

    if (moment(sdate).isBefore(moment())) {
      document.getElementById("sdate").value = moment().format("DD/MM/YYYY");
      // alert("S")
    } else {
      setid_sdate(s);
    }
  };

  const FormatDateE = (edate) => {
    var e = moment(edate).format("DD/MM/YYYY");
    let sum = id_sdate;
    if (
      moment(edate).isBefore(
        sum[6] +
          sum[7] +
          sum[8] +
          sum[9] +
          "-" +
          sum[3] +
          sum[4] +
          "-" +
          sum[0] +
          sum[1]
      ) ||
      moment(edate).isBefore(moment())
    ) {
      document.getElementById("edate").value = moment().format("DD/MM/YYYY");
    } else {
      setid_edate(e);
    }
  };

  const selectYear = () => {
    var years = new Date().getFullYear();

    // alert(years + typeof years)

    let sum = [];

    for (let i = 0; i < 10; i++) {
      sum.push(years - i);
      //alert(years-i)
    }
    setYear(sum);
  };

  return (
    <div className="bgimgadd">
    <div>
    <div className="form-box-in">
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

        <div className="nisitinfo">
          {nisitinfo.ln_id} {nisitinfo.ln_name}
        </div>

        <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setid_position(event.target.value);
            }}
          />
          <span></span>
          <label>Position</label>
        </div>
        
        <div>
          <Dropdown
            options={setcom()}
            placeholder="Select Company"
            required
            onChange={(event) => {
              setcp(event.value);
            }}
          />
        </div>
        {other(cp_id)}
        <div className="txt_field-in">
          <label>Start Date</label>
          <input
            type={"date"}
            required
            id="sdate"
            className="date-input"
            onChange={(event) => {
              FormatDateS(event.target.value);
            }}
          />
        </div>

        <div className="txt_field-in">
          <input
            type={"date"}
            required
            id="edate"
            className="date-input"
            onChange={(event) => FormatDateE(event.target.value)}
          />

          <label>End Date</label>
        </div>

        <div className="txt_field-in">
          <Dropdown
            options={year}
            required
            placeholder="Select Year"
            onChange={(event) => {
              setid_year(event.value);
            }}
          />

          {/* <input
            type={"text"}
            required
            onChange={(event) => {
              setid_year((event.target.value));
            }}
          />
          <span></span>
          <label>Year</label> */}
        </div>

        <div>
          <input
            type="file"
            required
            onChange={(e) => {
              uploadImage(e);
            }}
          />
        </div>

        <div className="button-st-in">
          <div className="box">
            <input type={"submit"} value="Apply" onClick={addinternship} />
          </div>

          <Link
            to={"/internship/" + id}
            className="btCancel"
            onClick={refreshPage}
          >
            Cancel
          </Link>
          {/* <input type={"submit"} value="Cancel" /> */}
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Add_internship;
