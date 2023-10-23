import React from 'react';
import './projectcard.css';

export default function ProjectProjectcardcard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className='card-image' />
            <div className="card-body">
                <h3 className="card-title">
                    <a target={'_blank'} href={props.link} className='card-link'>
                        {props.title}
                    </a>
                </h3>
                <p className="card-text">{props.description}</p>

                <div className='card-buttons'>
                    <button className="card-button">
                        <a target={'_blank'} href={props.link} className="card-button-link">
                            Deployed Link
                        </a>
                    </button>

                    <button className="card-button">
                        <svg className="card-icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor" d="...your path data here..." />
                        </svg>
                        <a target={'_blank'} href={props.git_hub_link} className='card-button-link'>
                            Source Code
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
