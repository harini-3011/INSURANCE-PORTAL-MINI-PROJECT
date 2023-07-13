import React, { useState } from "react";
import { Link } from "react-router-dom";
import './life.css';

const Life = () => {


    return (
        <>
        <nav >
        <div>
          <div className="topnav">
            <img className="img" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689145061/logo-removebg-preview_drj4er.png" alt="logo" />
            <br></br>
            <h1>INSURIFY</h1>
            <button style={{ float: 'right' }}><Link to='/'>LOGOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/'>CONTACT</Link></button>
            <button style={{ float: 'right' }}><Link to='/'>COMPARATOR</Link></button>
            <button style={{ float: 'right' }}><Link to='/'>INSURANCE</Link></button>
            <button style={{ float: 'right' }}><Link to='/'>ABOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/nav'>HOME</Link></button>
          </div>
        </div>
      </nav>

      <div>

  <div id="mySidenav" class="sidenav">
    
  <a href="#" id="health">Health Insurance</a>
  <a href="/life" id="life">Life Insurance</a>
  <a href="#" id="automobile">Car Insurance</a>
  <a href="#" id="child">Child Insurance</a>
  <a href="#" id="travel">Travel Insurance</a>
  <a href="#" id="property">Property Insurance</a>
  </div>
      </div>
      <div>
  <div className="split left">
    <div className="centered">
      <img style={{height:"300px",width:"300px",marginRight:"150px",marginBottom:"80px"}} src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689178871/round-background-smiling-family_23-2147618990_1_wm2ocz.avif" alt="Avatar woman" />
    <h1 style={{color:"goldenrod",marginLeft:"20px"}}>We are rated...</h1>
      <div  class="rate">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <label for="star5" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star4" title="text" style={{marginRight:"80px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star3" title="text" style={{marginRight:"80px",fontSize:"48px"}}>&#x2605;</label>
   
    <label for="star2" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star1" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#9734;</label>
  </div>


     <p>Insurify is one of the India's largest marketplaces</p>
    </div>
    
  </div>
  <div className="split right">
    <div className="centered">
        <p style={{color:'antiquewhite',fontFamily:"sans-serif",fontWeight:"bolder",fontSize:"40px"}}>Rs.1 Crore life cover starting at Rs.450/per month</p>
        <button class="btn">COVID-19 COVERED</button>
        <br></br>
        <br></br>
        
    <form>
    <div class="form-group">
     
  <label htmlFor="full-name" className="form-label">Full Name:</label>
  <input type="text" id="full-name" className="form-input" required />
  </div>
  <div className="form-group">
    <label htmlFor="age" className="form-label">Age:</label>
    <input type="number" id="age" className="form-input" required />
  </div>


<div class="form-group">
      <label for="gender" class="form-label">Gender:</label>
      <select id="gender" class="form-input" required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
<div className="form-group">
  <label htmlFor="phone" className="form-label">Phone:</label>
  <input type="tel" id="phone" className="form-input" required pattern="[0-9]{10}" />
</div>
<button class="button">
    <span class="button-content">Submit</span>
     </button>
</form>
</div>

    </div>
  </div>



        </>

    );

};
export default Life;