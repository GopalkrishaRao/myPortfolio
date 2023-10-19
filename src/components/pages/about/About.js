import React from 'react';
import './about.css';

export default function About() {
  return (
    <>
    <div className='about_page'>
    <div className='about_container'>
      {/* name and about left */}
      <div className='name_about'> 
        <h1 className='name'>
          Gopalkrishna Rao
        </h1>
        <p>
          I am a passionate web developer, specialized in crafting elegaging and responsive websites using the latest technologies and best practices.
        </p>
      </div>

      {/* image right */}
      <div>
        <img
            src={require("../../resources/images/gk.png")}
            className='profile_photo'
            alt="profilePhoto"
          />
      </div>
    </div>
    {/* end of name about and profile photo */}

    

    <div>
      <p>
        
What I Do
I love turning complex problems into simple, beautiful, and intuitive designs. I have a knack for crafting user-friendly experiences that keep both user needs and business goals in mind. My expertise includes:
</p><p>
Front-End Development: Creating visually appealing and intuitive user interfaces using HTML, CSS, and JavaScript. I'm well-versed in popular front-end libraries and frameworks like React, Vue, and Angular.
</p><p>
Back-End Development: Building robust and scalable server-side applications using Node.js, Express, Django, or Ruby on Rails. I have experience working with various databases including MongoDB, MySQL, and PostgreSQL.
</p><p>
Full-Stack Development: Seamlessly integrating front-end and back-end technologies to develop feature-rich web applications. I enjoy the challenge of handling both the user interface and server-side logic.
</p><p>
My Approach
I am a problem solver at heart, and I thrive on challenges. I enjoy collaborating with clients and stakeholders to understand their goals and bring their visions to life. I am always eager to learn and keep up-to-date with the latest trends and technologies in the ever-evolving field of web development.
</p><p>
Let's Work Together
I am currently open to new opportunities and collaborations. Whether you need a stunning website, a robust web application, or simply want to discuss an idea, I'm here to help! Let's create something amazing together.
</p><p>
Feel free to get in touch to discuss how we can work together to achieve your web development goals.
      </p>
    </div>
    </div>
    </>
  )
}
