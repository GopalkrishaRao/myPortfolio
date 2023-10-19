import React from 'react'
import { NavLink } from "react-router-dom";
export default function Error() {
  return (
    <>
        <h2>404 Error.....</h2>
        <h2>Page Not found</h2>
        <div>
        <NavLink to="/">
            <button>Go Back to Home</button>
        </NavLink>
        </div>
    </>
  )
}
