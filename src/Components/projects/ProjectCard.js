import React from 'react'


export default function ProjectCard(props) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        
        {/* <figure>
          <img src={require(`${props.srcImg}`).default} alt="Image" />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">
            {props.Title}
            
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <a hraf='https://github.com/GopalkrishaRao' target={'_blank'}>
            Click
          </a>
          <div className="card-actions justify-end">
            <div>
              <h1>Technologies used</h1>
              <div className="badge badge-outline">HTML</div> 
              <div className="badge badge-outline">CSS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
