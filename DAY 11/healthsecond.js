import React, { useState } from "react";
import { Link } from "react-router-dom";
import './healthsecond.css';
const Healthsecond = () =>
{
    return(
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

  

     <div style={{backgroundColor:"rgb(210, 195, 174)",padding:"20px",height:"840px",marginTop:'0%'}}>



        <div
        style={{
          border: '2px solid #ccc',
          backgroundColor: '#eee',
          borderRadius: '5px',
          padding: '16px',
          margin: '16px 0',
          width:"1000px",
          marginTop:"150px",
          marginLeft:"200px"
        }}
      >
        


        <div style={{display:'flex'}}>

        <div style={{display:'flex'}}>
          <div style={{marginLeft:'0px'}}>
        <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689274441/health-insurance-removebg-preview_w4kc60.png" alt="Avatar" style={{ width: '90px',   borderRadius: '50%' }} />
        </div>
        <div style={{marginLeft:'10%'}}>
        <p><span style={{ fontSize: '20px', marginRight: '15px',color:"goldenrod" }}>CARE HEALTH INSURANCE</span>  </p>
        <p style={{family:"sans-serif"}}>"Save upto 30%"</p>
        </div>
        </div>
        <div style={{marginTop:'4%'}}>
            <button class="btn" style={{marginLeft:'65%',height:'55px',width:'200px',marginRight:'40px'}}><i class="fa fa-download"></i><a href="/C:\Users\admin\Desktop\CARE INSURANCE BROCHURE.pdf" download style={{color:"white"}}> Download Brochure</a></button>
            </div>
            <div  style={{marginTop:'4%'}}>
             <button class="btn" style={{marginLeft:'70%',height:'55px',width:'200px'}}><Link to ="/payment"  style={{color:"white"}}>PROCEED TO PAY</Link> &#x2192;</button>
             </div>
         </div>
         
         </div>

         <div
        style={{
          border: '2px solid #ccc',
          backgroundColor: '#eee',
          borderRadius: '5px',
          padding: '16px',
          margin: '16px 0',
          width:"1000px",
          marginTop:"50px",
          marginLeft:"200px"
        }}
      >
        


        <div style={{display:'flex'}}>

        <div style={{display:'flex'}}>
          <div style={{marginLeft:'0px'}}>
        <img src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689307922/medical-team-removebg-preview_bnxxpb.png" alt="Avatar" style={{ width: '90px',   borderRadius: '50%' }} />
        </div>
        <div style={{marginLeft:'10%'}}>
        <p><span style={{ fontSize: '20px', marginRight: '15px',color:"goldenrod" }}>ADITHYA BIRLA INSURANCE</span>  </p>
        <p style={{family:"sans-serif"}}>"Save upto 20% with tax reduction"</p>
        </div>
        </div>
        <div style={{marginTop:'4%'}}>
            <button class="btn" style={{marginLeft:'100%',height:'55px',width:'200px',marginRight:"-60px"}}><i class="fa fa-download"></i><a href="/C:\Users\admin\Desktop\ADITHYA BIRLA BROCHURE.pdf" download style={{color:"white"}}> Download Brochure</a></button>
            </div>
            <div  style={{marginTop:'4%'}}>
             <button class="btn" style={{marginLeft:'110%',height:'55px',width:'200px'}}><Link to ="/payment"  style={{color:"white"}}>PROCEED TO PAY</Link> &#x2192;</button>
             </div>
         </div>
         
      </div>



      <div
        style={{
          border: '2px solid #ccc',
          backgroundColor: '#eee',
          borderRadius: '5px',
          padding: '16px',
          margin: '16px 0',
          width:"1000px",
          marginTop:"50px",
          marginLeft:"200px"
        }}
      >
        


        <div style={{display:'flex'}}>

        <div style={{display:'flex'}}>
          <div style={{marginLeft:'0px'}}>
        <img src="https://cdn-icons-png.flaticon.com/128/2024/2024275.png" alt="Avatar" style={{ width: '90px',   borderRadius: '50%' }} />
        </div>
        <div style={{marginLeft:'10%'}}>
        <p><span style={{ fontSize: '20px', marginRight: '15px',color:"goldenrod" }}>KOTAK INSURANCE</span>  </p>
        <p style={{family:"sans-serif"}}>"Save upto 10% with 99 years gurantee"</p>
        </div>
        </div>
        <div style={{marginTop:'4%'}}>
            <button class="btn" style={{marginLeft:'100%',height:'55px',width:'200px',marginRight:'-90px'}}><i class="fa fa-download"></i><a href="/C:\Users\admin\Desktop\KOTAK INSURANCE.pdf" download style={{color:"white"}}> Download Brochure</a></button>
            </div>
            <div  style={{marginTop:'4%'}}>
             <button class="btn" style={{marginLeft:'110%',height:'55px',width:'200px'}}><Link to ="/payment" style={{color:"white"}}>PROCEED TO PAY</Link> &#x2192;</button>
             </div>
         </div>
         
      </div>






    </div>


  </>

    );
}
export default Healthsecond;