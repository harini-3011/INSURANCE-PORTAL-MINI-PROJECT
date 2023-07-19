import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import './login.css';

function Log({
  email,
  pass,
  
  name,
  setEmail,
  setName,
  setPass,
  
}) {
  const check = (e) => {
    e.preventDefault();
    if (pass === 'harini') {
      setCheckPass(true);
    }
  };
  const navigate=useNavigate();
  const[checkpass,setCheckPass]=useState(false);
  return (
    <>
    <div className="logmain">
      <div className="login">
        <form onSubmit={check}>
          <label style={{color:"goldenrod"}}htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="logbut">Login</button>
          {checkpass && alert('successful login '+name)}

          {checkpass && navigate('/nav')}
          <h2 style={{color:"grey"}}>Don't have an account?</h2>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <h5> Register</h5>
          </Link>
        </form>
      </div>
    </div>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name:state.login.name,
    
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);