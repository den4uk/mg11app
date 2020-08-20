import React from 'react'
import checkered from '../images/checkered.png'

export default function Navbar() {
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src={checkered} height="225" alt="logo" />
                <h1 className='title'>&nbsp;MG11 App</h1>
              </a>
            </div>
        </nav>
    )
}
