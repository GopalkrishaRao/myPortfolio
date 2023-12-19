import React, { useEffect, useRef } from 'react';
import './invertedcursor.css';

export default function InvertedCursor() {
  const particleRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (particleRef.current && cursorRef.current) {
        const particleRect = particleRef.current.getBoundingClientRect();

        if (
          e.clientX >= particleRect.left &&
          e.clientX <= particleRect.right &&
          e.clientY >= particleRect.top &&
          e.clientY <= particleRect.bottom
        ) {
          // Update cursor position only if the mouse is inside the Particle component
          cursorRef.current.style.setProperty('--x', e.clientX + window.scrollX + 'px');
          cursorRef.current.style.setProperty('--y', e.clientY + window.scrollY + 'px');
          cursorRef.current.style.display = 'block'; // Make cursor visible when inside the component
        } else {
          // Reset cursor position and hide it if outside the Particle component
          cursorRef.current.style.setProperty('--x', '-100vw');
          cursorRef.current.style.setProperty('--y', '-100vh');
          cursorRef.current.style.display = 'none'; // Hide cursor when outside the component
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none'; // Hide cursor when leaving the component
      }
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    particleRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      if (particleRef.current) {
        particleRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className='inverted' ref={particleRef}>
      <div id="invertedcursor" ref={cursorRef} style={{ display: 'none' }}>
  
      </div>

      {/* <h1>This Cursor is Inverted!</h1> */}
      {/* <p>Scroll down to see how the cursor interacts with different background and text colors.</p> */}

      <p style={{ backgroundColor: 'black', color: 'white' }}>
      "Transforming Ideas into Interactive Experiences - Your Vision, Our Expertise. Crafting Stunning Websites That Speak Your Brand’s Language. Elevate Your Online Presence with Innovative Design and Seamless Functionality. Where Creativity Meets Code – We Build Websites That Wow!"
      </p>
    </div>
  );
}
