import React from 'react'


export default function ProjectCard(props) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl ">
         <div className="card">
      <img src={props.image} alt={props.title} className='h-[280px]' />
      <div className="card-body">
        <h3 className="card-title">
          <a target={'_blank'} href={props.link} className= 'cursor-pointer'>
            {props.title}
          </a>
        </h3>
        <p className="card-text">{props.description}</p>
        <div className='flex justify-between'>
        <button>
          <a target={'_blank'} href={props.link} className= 'cursor-pointer'> 
          Deployed Link
          </a>
        </button>
        <button> 
          <a target={'_blank'} href={props.git_hub_link} className= 'cursor-pointer'>
            Source Code 
          </a>
        </button>
      </div>
      </div>
      
    </div>
      </div>
    );
  }
  
  
