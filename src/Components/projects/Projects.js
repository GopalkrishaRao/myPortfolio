import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
    <div className="blank_container   h-[100px] lg:h-[70px]" id="projects">
    </div>
    <div >
    <div className="mx-[60px] flex gap-5 justify-around flex-wrap " >
      {/* 01 Snake */}
      <ProjectCard  
        title= 'Snake' 
        link = 'https://snake-game-js-gk.netlify.app/'
        image={require("../../images/projects/snake.jpg")}
        description='Simple snake game developed with veinlla JavaScript'
        git_hub_link='https://github.com/GopalkrishaRao/PracticeProjects/tree/main/JavaScript/Snake_game_JavaScript'/>
        {/* 02 Pong */}
      <ProjectCard  
        title= 'Pong' 
        link = 'https://pong-js-gk.netlify.app/'
        image={require("../../images/projects/Pong.jpg")}  
        description='Pong game developed with veinlla JavaScript'
        git_hub_link= 'https://github.com/GopalkrishaRao/PracticeProjects/tree/main/JavaScript/Pong_game_JavaScript'/>
        {/* 03 Tictactoe */}
      <ProjectCard  
        title= 'Tic-Tac-Toe'
        link = 'https://tic-tac-toe-js-gk.netlify.app'
        image={require("../../images/projects/tictactoe.png")} 
        description='Pong game developed with veinlla JavaScript'
        git_hub_link='https://github.com/GopalkrishaRao/PracticeProjects/tree/main/JavaScript/Tic-Tac-Toe_JavaScript'/>
        {/* 04 */}
      <ProjectCard  
        title= 'Rode Clone'
        link = 'https://lcproject-rodeclone.netlify.app/'
        image={require("../../images/projects/Rode.jpg")} 
        description='Clone of rode.com made with HTML and tailwind CSS.'
        git_hub_link='https://github.com/GopalkrishaRao/WebDev/tree/main/TailWind_Projects/Rode_clone'/>
        {/* 05 */}
      <ProjectCard  
        title= 'Shopify Clone'
        link = 'https://lcproject-shopifyclone.netlify.app/'
        image={require("../../images/projects/Shopify.jpg")} 
        description='Clone of shopify.in made with HTML and tailwind CSS.'
        git_hub_link='https://github.com/GopalkrishaRao/WebDev/tree/main/TailWind_Projects/shofify_clone'/>
        {/* 06 */}
      <ProjectCard  
        title= 'Paytm Clone'
        link = 'https://lcproject-paytmclone.netlify.app/'
        image={require("../../images/projects/Paytm.jpg")} 
        description='Clone of paytm.com made with HTML and tailwind CSS.'
        git_hub_link='https://github.com/GopalkrishaRao/WebDev/tree/main/TailWind_Projects/Paytm-clone'/>
    </div>
    </div>
    </>
  )
}
