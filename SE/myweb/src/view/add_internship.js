import React, { useEffect, useState , Component  } from "react";
import "../style/add_internship.css";
import 'react-dropdown/style.css'
// import { Checkbox } from 'react-native-paper';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Dropdown from 'react-dropdown'


const userData = [{ name: "ฝึกงาน" }, { name: "สหกิจศึกษา" }];


function Add_internship() {
 
  const [company, setcompany] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const getCompany = () => {
       Axios.get("http://" + ip + ":3001/company").then((response) => {
        setCompanyList(response.data);
        for(let i in companyList){
          // alert(companyList[i].cp_name)
          company.push(companyList[i].cp_name);
        }
        // alert(companyList[0].cp_name)
      });
  };

  function setcom(){
    for(let i in companyList){
      // alert(companyList[i].cp_name)
      company.push(companyList[i].cp_name);
    }
    return company;
  }

  const [ln_id, setln_id] = useState("");
  const [id_date, setid_date] = useState("");
  const [cp_name, setcp_name] = useState("");
  const [id_confirm, setid_confirm] = useState("");
  const [id_status, setid_status] = useState("pending");


  const [id_position, setid_position] = useState("");
  const [id_sdate, setid_sdate] = useState("");
  const [id_edate, setid_edate] = useState("");
 


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

  const ip = "192.168.0.246";

  // const addinternship = () => {
  //   Axios.post("http://" + ip + ":3001/create/addinternship", {
  //     id_date: id_date,
  //     ln_id: ln_id,
  //     cp_name: cp_name,
  //     id_position: id_position,
  //     id_sdate: id_sdate,
  //     id_file: baseImage,
  //     id_status: id_status,
  //     id_edate: id_edate,
  //     id_confirm: id_confirm,
  //   }).then(() => {
  //     setinternship([
  //       ...internship,
  //       {
  //         id_date: id_date,
  //         ln_id: ln_id,
  //         cp_name: cp_name,
  //         id_position: id_position,
  //         id_sdate: id_sdate,
  //         id_file: baseImage,
  //         id_status: id_status,
  //         id_edate: id_edate,
  //         id_confirm: id_confirm,
  //       },
  //     ]);
  //   });
  // };

  useEffect(() => {
    setUsers(userData);
    getCompany();
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
        <Dropdown options={setcom()}  placeholder="Select Company" />
  </div>
        <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setid_sdate(event.target.value);
            }}
          />
          <span></span>
          <label>Start Date</label>
        </div>

        <div className="txt_field-in">
          <input
            type={"text"}
            required
            onChange={(event) => {
              setid_edate(event.target.value);
            }}
          />
          <span></span>
          <label>End Date</label>
        </div>

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
            <input type={"submit"} value="Apply" />
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
