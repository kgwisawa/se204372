/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "../style/login.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const ip = "192.168.0.239";


let start = 1;
let end = 1;
function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 10);
  console.log('page to reload')
}

function Login() {
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password , setPassword] = useState('');

  const [path , setpath] = useState('/new-start');

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
    for (let i = 0; i < users.length; i++) {

      if (email === users[i].email && password === users[i].password) {
        const path = "/new/"+users[i].ln_id;
        navigate(path);
        return;
      }
    }
    for(let i = 0 ; i < admins.length ; i++){
        if (email === admins[i].email && password === admins[i].password) {

        if(admins[i].po_name === 'admin'){
          navigate("/new-admin" );
          return;
        }
        else if(admins[i].po_name === "teacher"){
          navigate("/new-t");
          return;
        }
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
          {/* <Link to={path} onClick={getVal}>Login</Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
