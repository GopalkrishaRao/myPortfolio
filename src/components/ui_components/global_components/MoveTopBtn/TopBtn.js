import React from 'react';
import {FiChevronsUp} from 'react-icons/fi';
import './topBnt.css'

export default function TopBtn() {
    function scrollToTop(){
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
  return (
    <>
    <div className='btn-to-top'>

        <FiChevronsUp className='btn-top'
        onClick={scrollToTop}/>
    </div>
    </>
  )
}
