import React, { useState } from "react";
import { Link } from "react-router-dom";
import './nav.css';



const Nav = () => {


  return (
    <>
      <nav >
        <div>
          <div className="topnav">
            <img className="img" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689145061/logo-removebg-preview_drj4er.png" alt="logo" />
            <br></br>
            <h1 style={{color:"antiquewhite"}}>INSURIFY</h1>
            <button style={{ float: 'right' }}><Link to='/'>LOGOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/contact'>CONTACT</Link></button>
            <button style={{ float: 'right' }}><Link to='/comparator'>COMPARATOR</Link></button>
            <button style={{ float: 'right' }}><Link to='/about'>ABOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/nav'>HOME</Link></button>
          </div>
        </div>
      </nav>

      <div>

  <div id="mySidenav" class="sidenav">
    
  <a href="/health" id="health">Health Insurance</a>
  <a href="/life" id="life">Life Insurance</a>
  <a href="/car" id="automobile">Car Insurance</a>
  <a href="/child" id="child">Child Insurance</a>
  <a href="/travel" id="travel">Travel Insurance</a>
  <a href="/property" id="property">Property Insurance</a>
  </div>
      </div>
      <div>
    <div className="hero-image">
    <div className="hero-text">
      

      <h1 style={{fontSize: '50px',color:"antiquewhite"}}>INSURIFY</h1>
     <h3>YOUR JOURNEY OUR CARE</h3>
     <button class="button">
      
    <span class="button-content"><Link to="/about" style={{color:"goldenrod"}}>ABOUT </Link></span>
     </button>

 
    </div>
    </div>
    <div className='para'>
       <center>
    
    <br></br>
    <br></br>
  
    
    <h3 style={{color:"goldenrod"}} >"Insurance is not just a policy, it's a promise of protection."</h3>
    <p>In a world full of uncertainties, where the unexpected can strike at any moment,
         insurance stands tall as the guardian of peace of mind.<br></br> It's the shield that protects us 
         from the storms of life, offering a safety net when we need it the most.
          </p>
          
          </center>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class='fullcard'>
    <div class="row">
  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/128/547/547612.png"/>
      <h3 style={{color:"goldenrod"}}>FAMILY HEALTH INSURANCE</h3>
      <p>UPTO 30% OFFER</p>
      
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png"/>
      <h3 style={{color:"goldenrod"}}>HEALTH INSURANCE</h3>
      <p>UPTO 20% OFFER</p>
      
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/128/286/286061.png"/>
      <h3 style={{color:"goldenrod"}}>TERM LIFE INSURANCE</h3>
      <p>UPTO 10% OFFER</p>
      
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/128/2200/2200326.png"/>
      <h3 style={{color:"goldenrod"}}>TRAVEL INSURANCE</h3>
      <p>UPTO 15% OFFER</p>
      
    </div>
  </div>
</div>
    </div>
   
      <h1 style={{color:"goldenrod",marginLeft:"650px",fontSize:"30px",alignItems:"center",color:"grey",fontFamily:"Arial"}}>OUR PARTNERS</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{color:"goldenrod",marginLeft:"550px",fontSize:"20px",alignItems:"center",color:"goldenrod"}}>"Leading insurers for your financial freedom"</h1>
      <br></br>
      <br></br>
      <br></br>&nbsp;
      <br></br>
      <br></br>
      <div>
        <img className="partner"style={{marginLeft:"80px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f2mEV7dQigX5Il8okcn5N8rPtqiiHl8xvw&usqp=CAU"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        <img className="partner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4KQhjw5Fujd2SuUrIXqpNZMrIm3DM-8pww&usqp=CAU"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <img className="partner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqRYHxTs-uI6Q2W0mchISjNgpE8EaatUZzw&usqp=CAU" height={"220px"} width={"220px"}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        <img className="partner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjURQQ-hJcTJtbtJ6krcxsEOAOssqsPB76g&usqp=CAU"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        <img className="partner"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWQfK4RIA0G16tHjSMtLEldnWTXi6ALcRBQ&usqp=CAU" height={"220px"}/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <div class="clearfix">
 <div class="help">
  <img className="img1" src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689144979/home-removebg-preview_ivaf8w.png"   />
  <h1 style={{color:"rgb(161, 111, 41)",fontFamily:"calibri",marginLeft:"70px",fontSize:"50px"}}>Here to help you...</h1>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <p style={{marginLeft:"100px",color:"white",fontFamily:"calibri",fontSize:"40px"}}>Our friendly customer support team is your extended family.
  <br></br> Speak your heart out. They listen with undivided attention<br></br> to 
  resolve your concerns. Give us a call, request a callback <br></br>or drop us an email, we’re here to help.</p>
  <p style={{marginLeft:"100px",color:"white",fontFamily:"calibri",fontSize:"40px",marginBottom:"70px"}}>Want to contact us?</p>

  <a  style={{marginLeft:"100px",color:"white",fontFamily:"calibri",fontSize:"40px"}}href="mailto:hmsharini301103@gmailcom?subject=Hello&body=I%20hope%20you%20are%20doing%20well">
    <button class="button"><span class="button-content">Send an email</span></button></a>

</div>

</div>
      </div>
     
  <footer>
        <h1 style={{fontsize:"30px",color:"white",marginLeft:"60px"}}>Payment methods</h1>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <img style={{marginLeft:"-250px"}}src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" height={"100px"}/>&nbsp;&nbsp;
          <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" height={"100px"}/>&nbsp;&nbsp;
          <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png"height={"100px"}/>&nbsp;&nbsp;
          <img src="https://cdn-icons-png.flaticon.com/128/11041/11041055.png"height={"80px"} width={"80px"}/>
          
          <a href="https://www.facebook.com/"><img style={{height:"60px",marginLeft:"700px",marginBottom:"40px"}} src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689172612/facebook-removebg-preview_oirypt.png"/></a>
          <a href="https://www.instagram.com"><img style={{height:"60px",marginLeft:"1300px",marginBottom:"40px",top:"150px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689174187/instagram-removebg-preview_pzxb9f.png"/></a>
          <a href="https://www.youtube.com"><img style={{height:"60px",marginLeft:"1400px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689175430/youtube-removebg-preview_wz713r.png"/></a>
          
        </div>
        <div>
          <p style={{marginLeft:"600px",color:"white"}}>&copy;Copyrights 2021-2023 insurify.com.All rights reserved</p>
        </div>
      </footer>
      
   
    
   
   
    </>
  );
};

export default Nav;
