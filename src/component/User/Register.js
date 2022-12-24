import React from 'react';
import "../User/login.css";
import { clearErrors, register } from '../../actions/userAction';
function Register() {

  // dispatch(register(myform));
  return (
    <div className="center">
      <h1>Welcome to DIL FOODS</h1>


      <form method="post">
        <div className="txt_field">
          <input type="text" />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input type="text" />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="text" />
          <span></span>
          <label>Phone No</label>
        </div>
        <div className="txt_field">
          <input type="text" />
          <span></span>
          <label>Address</label>
        </div>
        <div className="txt_field">
          <input type="password" />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="password" />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div className="pass">Forgot Password</div>
        <input type="submit" value="login" />
        <div className="signup_link">
          Already have account?<a href="login.html">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Register;