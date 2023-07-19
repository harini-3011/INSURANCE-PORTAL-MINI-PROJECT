import React from 'react';
import './about.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 style={{color:"goldenrod",marginLeft:"450px"}}>ABOUT US</h1>
      <img style={{height:"40px"}} src="https://res.cloudinary.com/dtrytsho8/image/upload/v1689266499/about-removebg-preview_l2qdp0.png"/>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <p style={{marginRight:"500px",color:"goldenrod"}}>Welcome to Insurify!</p><p> We are a leading insurance company committed to providing comprehensive coverage and exceptional service to individuals and businesses.</p>
      </div>
      <h2>Our Mission</h2>
      <p>At Insurify, our mission is to protect our clients' assets and provide them with peace of mind. We strive to be a trusted partner by offering reliable insurance solutions tailored to their unique needs.</p>
      
      <h2>Our Services</h2>
      <ul>
        <li>Auto Insurance</li>
        <li>Home Insurance</li>
        <li>Business Insurance</li>
        <li>Life Insurance</li>
        <li>Health Insurance</li>
        <li>Property Insurance</li>
        <li>Travel Insurance</li>
        <li>Specialty Insurance (Boat, Motorcycle, etc.)</li>
      </ul>
      
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Expertise: With a team of experienced insurance professionals, we possess in-depth knowledge of the industry and stay updated on the latest trends and regulations.</li>
        <li>Customized Solutions: We understand that each client has unique requirements. Our dedicated agents work closely with clients to tailor insurance packages that fit their specific needs and budget.</li>
        <li>Claims Assistance: Our claims team is committed to guiding clients through the claims process and ensuring a smooth experience during difficult times. We strive for prompt claim resolution and offer support at every step.</li>
        <li>Exceptional Customer Service: We pride ourselves on delivering exceptional customer service. Our friendly and knowledgeable staff is available to answer questions, provide policy information, and address concerns.</li>
        <li>Trusted Partnerships: We have strong relationships with reputable insurance carriers, allowing us to offer a wide range of coverage options at competitive rates.</li>
        <li>Community Involvement: We believe in giving back to the community. Through various initiatives, we support local charities and organizations, contributing to the betterment of society.</li>
      </ul>
      
      <h2>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - Chief Underwriter</li>
        <li>Mike Johnson - Claims Manager</li>
        <li>Emily Thompson - Customer Service Representative</li>
        <li>David Lee - Sales Specialist</li>
      </ul>
    </div>
  );
}

export default AboutUs;
