/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "../style/login.css";
import Axios from "axios";
const ip = "192.168.0.246";

let start = 1;
let end = 1;

function Login() {

  const [email,setEmail] = useState('');
  const [password , setPassword] = useState('');

  const [users, setUser] = useState([]);
  const [admins, setAdmin] = useState([]);

  if (start === 1)
    Axios.get("http://" + ip + ":3001/loginnisit").then((response) => {
      setUser(response.data);
      start = 0;
    });

  if (end === 1)
    Axios.get("http://" + ip + ":3001/loginadmin").then((response) => {
      setAdmin(response.data);
      end = 0;
    });

  const getVal = () => {
    for (let i = 0; i < users.length || i < admins.length; i++) {

      if (email === users[i].email && password === users[i].password) {
        alert(users[i].email + " " + users[i].password);
      }
      else if (email === admins[i].email && password === admins[i].password) {
        alert(admins[i].email + " " + admins[i].password)
        if(admins[i].po_name === 'admin'){
          alert("Admin: "+admins[i].po_name);
        }
        else if(admins[i].po_name === "teacher"){
          alert("Teacher: "+admins[i].po_name);
        }
      }
      else {
        alert("Wrong Email or Password");
      }
    }
  };

  return (
    <div className="bg">
      <div className="form-box">
        <h1>Login</h1>

        <form >
          <div className="txt_field">
            <input type={"text"} onChange={e => setEmail(e.target.value)} required />
            <span></span>
            <label>Nontri Account</label>
          </div>

          <div className="txt_field">
            <input type={"password"} onChange={e => setPassword(e.target.value)} required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="box">
            <input type={"submit"} value="Login" onClick={getVal} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
