import React from 'react';
import './contact.css'; 

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="blank-container"></div>
      <div className="hero-content">
        <div className='image-container'>
          <img
            src={require("../../resources/images/gk.png")}
            className="profile-pic"
            alt="Profile"
          />
        </div>
        <div>
          <h1>
            Gopalkrishna Rao
          </h1>
          <p>
            I'm a newbie to the world of coding and programming with a Master's degree in Life Sciences.
            Learning and polishing coding skills by regular practice to gain command over the subject with a dream of pursuing a career in the field of programming and development.
          </p>
        </div>
      </div>
      {/* <div className='btnimg'>
        <img src={require("../../resources/images/gk.png")} alt="ProfilePhoto" />
      </div> */}
      <div className="contact-info">
        <div>Contact Information</div>
        <h1>E-mail: 
          <span>hrgkrao[at]gmail[dot]com</span>
        </h1>
        <h1>LinkedIn: 
          <span>
            <a target={'_blank'} rel="noopener noreferrer" href='https://www.linkedin.com/in/gopalkrishna-rao-199b99265/'>
              &#128279; Gopalkrishna Rao
            </a>
          </span>
        </h1>
        <h1>GitHub:
          <span>
            <a target={'_blank'} rel="noopener noreferrer" href='https://github.com/GopalkrishaRao'>
              &#128279; GK Rao
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
}
