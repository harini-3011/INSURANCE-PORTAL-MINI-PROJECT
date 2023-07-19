import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import './car.css';

const Car = () => {
  const navigate=useNavigate();
 
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const[policyType,setPolicy]=useState('');
  const[authorityDocs,setAuthority]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   navigate('/carsecond');
  };

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
  <div className="split left">
    <div className="centered">
      <img style={{height:"300px",width:"300px",marginRight:"150px",marginBottom:"20px",marginTop:"200px"}} src="https://cdn-icons-png.flaticon.com/128/2555/2555048.png" alt="Avatar woman" />
    <h1 style={{color:"goldenrod",marginLeft:"100px"}}>We are rated...</h1>
      <div  class="rate">
    
  
    
    <label for="star5" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star4" title="text" style={{marginRight:"80px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star3" title="text" style={{marginRight:"80px",fontSize:"48px"}}>&#x2605;</label>
   
    <label for="star2" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#x2605;</label>
    
    <label for="star1" title="text" style={{marginRight:"100px",fontSize:"48px"}}>&#9734;</label>
  </div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
     <p style={{marginRight:"110px",color:"goldenrod",fontWeight:"bolder",fontSize:"20px"}}>Insurify is one of the India's largest marketplaces</p>
    </div>
    
  </div>
  <div className="split right">
    <div className="centered">
        <p style={{color:'antiquewhite',fontFamily:"sans-serif",fontWeight:"bolder",fontSize:"10px"}}>Rs.1 Crore life cover starting at Rs.450/per month</p>
        <button style={{marginTop:"50px"}}class="btn">COVID-19 COVERED</button>
        <br></br>
        <br></br>
        
    <form onSubmit={handleSubmit}>
    <div class="form-group">
     
  <label htmlFor="full-name" className="form-label">Full Name:</label>
  <input type="text" id="full-name" className="form-input"  onChange={(e) => setFullName(e.target.value)} required />
  </div>
  <div className="form-group">
    <label htmlFor="age" className="form-label">Age:</label>
    <input type="number" id="age" className="form-input"  onChange={(e) => setAge(e.target.value)} required />
  </div>


<div class="form-group">
      <label for="gender" class="form-label">Gender:</label>
      <select id="gender" class="form-input" onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group">
    <label for="policyType" class="form-label">Policy Type:</label>
        <select id="policyType" class="form-input" onChange={(e) => setPolicy(e.target.value)} required>
            <option value="">Select Policy Type</option>
            <option value="health">Health Insurance</option>
            <option value="life"> Life Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="property">Property Insurance</option>
            <option value="travel">Travel Insurance</option>
            <option value="car">Car Insurance</option>
        </select>
        </div>
        <div class="form-group">
        <label for="authorityDocs" class="form-label">Upload Car Documents:</label>
        <input type="file" class="form-input" name="authorityDocs" accept=".pdf, .doc, .docx" onChange={(e) => setAuthority(e.target.value)} required/>
       </div>
<div className="form-group">
  <label htmlFor="phone" className="form-label">Phone:</label>
  <input type="tel" id="phone" className="form-input"  onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" />
</div>
<button class="button" >
    <span class="button-content">Submit</span>
     </button>
</form>
</div>

    </div>
  </div>



        </>

    );

};
export default Car;