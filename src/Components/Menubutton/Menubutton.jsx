import React from 'react'
import './Menubutton.css';

function Menubutton() {
  return (
    <div><button className="btn">
    <span className="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
    </span>
    <span className="text">MENU</span>
</button></div>
  )
}

export default Menubutton