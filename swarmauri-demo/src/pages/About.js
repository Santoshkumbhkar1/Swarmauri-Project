import React from 'react'
// import {Link} from 'react-router-dom';
import Resume from '../assets/Documents/resume.pdf';
import './CSS/About.css';
import pImage from '../image/Profile.jpg';
const About = () => {
  return (
    <div className="about-container">
  
     <div className="about" id="about">
        <div className="about-img">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12"> </div>
          <img src={pImage} alt="profile_pic" />
        </div>

    <div className="about-content col-md-6 col-xl-6 col-l ">
      <h1>About Me</h1>
      <p>To pursue a challenging career within a dynamic organization where I can apply my skills and knowledge 
        effectively, striving for excellence in my field. I am driven to achieve results through smart, innovative 
        approaches and continuous improvement.</p>

        <div className="resume-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a 
              className="btn btn-resume" 
              href={Resume} 
              download="santosh_kumbhkar_resume.pdf"
            >
              My Resume
            </a>
          </div>
    </div>
  </div>
  </div>
  )
}

export default About
