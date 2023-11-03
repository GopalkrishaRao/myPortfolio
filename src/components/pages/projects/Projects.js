import React from 'react';
import './project.css'
import Projectcard from '../../ui_components/project_card/Projectcard'

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
        <Projectcard title={"abc"} content={"testContent"}/>
        <Projectcard title={"def"}/>
        
    </div>
    </>
  )
}
