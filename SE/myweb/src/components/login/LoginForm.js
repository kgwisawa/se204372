import React from "react";
import styled from "styled-components";
import "../../style/login.css"



function LoginForm() {


  const onPress =() =>{

    alert("kuyyyyyyyyyyyyyyyyyyyyyyyyyyy")
  }



  return (
  
    <div className="form-box">
       <h1>Login</h1>


      <form method="post" id="loginnisit">
        <div className="txt_field">
          <input type={"text"} required />
          <span></span>
          <label>Nontri Account</label>
        </div>
        <div className="txt_field">
          <input type={"text"} required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="box">
          <input type={"submit"} value="Login" onClick={onPress}/>
        </div>
      </form>
    </div>


  );
}

export default LoginForm;
