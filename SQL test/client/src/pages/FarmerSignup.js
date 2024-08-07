import React, { useState } from 'react';
import Axios from 'axios';
import parag from "../images/5048173.webp";  
import { Link } from 'react-router-dom';

const FarmerSignup = () => {
  const [phoneReg, setPhoneReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [ageReg, setAgeReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cpasswordReg, setCpasswordReg] = useState("");

  const validateForm = () => {
    // Validation for phone number
    if (!phoneReg.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }

    // Validation for email
    if (!addressReg.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (!passwordReg.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)) {
      alert('Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long');
      return false;
  }
  
    // Validation for age (between 18 and 120)
    if (!ageReg.match(/^(1[0-9]|[2-9]\d|1[01]\d|120)$/)) {
      alert('Please enter a valid age between 10 and 120');
      return false;
    }

    // Validation for farmer name (only alphabets and spaces)
    if (!usernameReg.match(/^[a-zA-Z\s]+$/)) {
      alert('Please enter a valid farmer name (only alphabets and spaces)');
      return false;
    }
    if (passwordReg !== cpasswordReg) {
      alert('Password and confirm password must match');
      return;
    }
  
    return true; // All fields passed validation
  };

  const register = () => {
    if (validateForm()) {
      Axios.post('http://localhost:3002/signup', {
        phone: phoneReg,  
        uname: usernameReg,
        age: ageReg,
        address: addressReg,
        password: passwordReg,
        cpassword: cpasswordReg,
      }).then((response) => {
        alert("resitration successful")
        console.log(response);
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="ss">
          <a className="first" href="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </a>
        </div>
        <div className="ask">
          <Link to="/">Home</Link>
          <Link to="#">About us</Link>
          <Link to="/login" className="btn1">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
      </nav>

      <div id="fffman">
        <h1>Farmer Registration</h1>
        <form>
          <div id="ffirst">
            <i className="fa-solid fa-user"></i>
            <input type="text" id="fusername" placeholder="Farmer name" onChange={(e) => {
              setUsernameReg(e.target.value);
            }}/>
          </div>
          <div id="fthird">
            <i className="fa-solid fa-phone"></i>
            <input type="tel" id="fphone" placeholder="Phone number" onChange={(e) => {
              setPhoneReg(e.target.value);
            }}/>
          </div>
          <div id="fthird">
            <i className="fa-solid fa-circle-dot"></i>
            <input type="number" id="femid" placeholder="Age" onChange={(e) => {
              setAgeReg(e.target.value);
            }}/>
          </div>
          <div id="fsecond">
          <i class="fa-solid fa-envelope"></i>
            <input type="email" id="femail" placeholder="Email address" onChange={(e) => {
              setAddressReg(e.target.value);
            }}/>
          </div>
          <div id="ffourth">
            <i className="fa-solid fa-lock"></i>
            <input type="password" id="fpassword" placeholder="Password" onChange={(e) => {
              setPasswordReg(e.target.value);
            }}/>
          </div>
          <div id="ffive">
            <i className="fa-solid fa-lock"></i>
            <input type="password" id="fcpassword" placeholder="Confirm password" onChange={(e) => {
              setCpasswordReg(e.target.value);
            }}/>
          </div>

          <button id="fnn" type="submit" onClick={register}>
            <Link to="/login">SUBMIT</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmerSignup;
