import React from 'react';
import './project.css'
import pojrectList from './projectList.json';

import Projectcard from '../../ui_components/project_card/Projectcard';

export default function Projects() {
  return (
    <>
    <div className='pojects_header'>
      <h2 className='pojects_title'>
        My Projects
      </h2>
      {/* <div className='pojects_header_filter'>
        Filter
      </div> */}
    </div>
    <div className='my_projects_list'>
       {pojrectList.map((project)=>{
        return(
          <Projectcard 
          key={project.id}
          card_title={project.title}
          card_image={project.image}
          card_content={project.description}
          dep_link={project.url}
          git_repo_link={project.gir_repo_link}
          />
          )
       })}
    </div>
    </>
  )
};
