import React from 'react';
import './projectcard.css';


import {BsGithub} from 'react-icons/bs';
import {TbWorldCode} from 'react-icons/tb';


export default function Projectcard(props) {
    const {card_title,card_image, card_content, dep_link, git_repo_link}= props
    let cardimage=card_image
  return (
    <>
    <div className='p_card'>
        <h2 className='p_card_tilte'>
            {card_title}
        </h2>
        <img src={cardimage} alt='project immage'/>
        <p className='p_card_explaination'>
            {card_content}
        </p>
        {/*  add technologies */}
        <div className='p_card_buttons'>
            <button className='p_card_depl_link'>
                <a href={dep_link} target="_blank"
                rel="noreferrer">
                    <TbWorldCode className='fa_icon'/>
                    <h3>
                     Deployed Link
                    </h3>
                </a>
            </button>
            <button className='p_card_git_repo'>
                <a href={git_repo_link} target="_blank" rel="noreferrer">
                    <BsGithub className='fa_icon'/>
                    <h3>
                        Git Repo Link
                    </h3>
                </a>
            </button>
        </div>
    </div>
    </>
  )
}
