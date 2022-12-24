import React, { Fragment, useState } from 'react';
import "../User/login.css";
import {useDispatch, useSelector} from "react-redux"
import { clearErrors, login } from '../../actions/userAction';
import Loader from "../layout/Loader/Loader"

function Login() {
  const dispatch=useDispatch();
  const {error,loading, isAuthenticated}=useSelector((state)=>state.user);

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const handleChangeName=(event)=>{
    setName(event.target.value);
  };
  const handleChangePassword=(event)=>{
    setPassword(event.target.value);
  };
  console.log(password);
  const submit=(e)=>{
     e.preventDefault();
    dispatch(login(name,password))
  }
  return (
  <Fragment>
    {loading} ?<Loader/>:
    (<Fragment>
      <div className="center">
        <h1>Login</h1>
     <form method="post" action={submit}>
         <div className="txt_field">
             <input type="text" name="name" onChange={handleChangeName} value={name}/>
             <span></span>
             <label>Username</label>
        </div>
        <div className="txt_field">
            <input type="password" name="password" onChange={handleChangePassword} value={password}/>
            <span></span>
            <label>Password</label>
        </div>
         <div className="pass">Forgot Password</div>
         <input type="submit" value="login"/>
         <div className="signup_link">
             Not a Member?<a href="#">SignUp</a>
         </div>
     </form>
    </div>

      </Fragment>)
  </Fragment>


    
    










           
  );
}

export default Login;