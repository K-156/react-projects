import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
  <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
        <div className="links-container show-container">
          <ul className="links">
            {links.map((link) => {
              const {id, url, text} = link;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
          <ul className="social-icons">
            {social.map((socialIcon) => {
                const {id, url, icon} = socialIcon;
                return <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              })}
          </ul>
        </div>
      </div>
    </div>
  </nav>)
}

export default Navbar
