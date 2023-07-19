import './contact.css';
import { useState } from 'react';
const Contact =()=>
{
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [subject,setSub] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return(
   

  <div class="column">
    <div style={{width:"1500px",height:"650px"}} class="card">
    
  <div className="fside">
    <div className="centered">
    <form onSubmit={handleSubmit}>
      <div style={{display:"flex"}}>
    <div class="form-group">
     
  <label htmlFor="full-name" className="form-label" style={{color:"goldenrod"}}> Name:</label>
  <input type="text" id="full-name" style={{width:"500px",height:"50px"}} className="form-input"  onChange={(e) => setFullName(e.target.value)} required />
  </div>&nbsp;&nbsp;&nbsp;
  <div className="form-group">
    <label htmlFor="age" className="form-label" style={{color:"goldenrod"}}>Age:</label>
    <input type="number" id="age" className="form-input" style={{height:"50px"}} onChange={(e) => setAge(e.target.value)} required />
  </div>
  </div>

<div style={{display:"flex"}}>
<div class="form-group">
      <label for="subject" class="form-label" style={{color:"goldenrod"}}>Subject:</label>
      <input type="text" id="sub" style={{width:"500px",height:"50px"}} className="form-input" onChange={(e) => setSub(e.target.value)} required/>
    </div>&nbsp;&nbsp;
<div className="form-group">
  <label htmlFor="phone" className="form-label" style={{color:"goldenrod"}}>Phone:</label>
  <input type="tel" id="phone" className="form-input" style={{height:"50px"}}  onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" />
</div>
</div>
<div className="form-group">
  <label style={{color:"goldenrod"}}>Message:</label>
  <br></br>
  <br></br>
  
<textarea name="message" style={{width:"500px",height:"200px"}} placeholder="Message"></textarea>
</div>

<button class="button" >
    <span class="button-content">Send me</span>
     </button>
</form>
    </div>
  </div>
  <div className="sside">
   
        <h1 style={{color:"white",marginLeft:"130px"}}>Contact info</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display:"flex"}}>
          <div>
        <img  style={{height:"30px",width:"30px",marginLeft:"100px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689263988/globe-removebg-preview_hqobem.png"/>
        </div>&nbsp;&nbsp;
        <div>
        <p style={{marginTop:"5px"}}>123,ABC stree,coimbatore</p>
        </div>
        </div>
        <div style={{display:"flex"}}>
          <div>
        <img  style={{height:"30px",width:"30px",marginLeft:"100px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689264530/mail-removebg-preview_qnhwue.png"/>
        </div>&nbsp;&nbsp;
        <div>
        <p style={{marginTop:"5px"}}>example@gmail.com</p>
        </div>
        </div>
        <div style={{display:"flex"}}>
          <div>
        <img  style={{height:"30px",width:"30px",marginLeft:"100px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689264639/viber-removebg-preview_cc1ql6.png"/>
        </div>&nbsp;&nbsp;
        <div>
        <p style={{marginTop:"5px"}}>+91 9876543210</p>
        </div>
        </div>
        <div>
          <p style={{fontsize:"1000px",color:"white",marginRight:"30px"}}> Follow on:</p>
          <div style={{display:"flex"}}>
          <div>
            <a href="https://www.facebook.com"><img style={{width:"50px",marginLeft:"130px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689265181/facebook__1_-removebg-preview_jnv9rf.png"/></a>
          </div>&nbsp;&nbsp;&nbsp;
          <div>
            <a href="https://www.instagram.com"><img style={{width:"50px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689265212/instagram__1_-removebg-preview_rvlpum.png"/></a>
          </div>&nbsp;&nbsp;&nbsp;
          <div>
            <a href="https://www.youtube.com"><img style={{width:"50px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689265238/youtube__1_-removebg-preview_gcl1qy.png"/></a>
          </div>&nbsp;&nbsp;&nbsp;
          <div>
            <a href="https://www.twitter.com"><img style={{width:"50px"}}src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689265277/twitter-removebg-preview_e5xthi.png"/></a>
          </div>
          </div>
         
        </div>
    
  </div>
</div>
</div>


   
  );

}
export default Contact;