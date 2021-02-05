import React from "react"
import { Link } from "gatsby"

import "../../styles/header.scss"

import siteSettings from "../../../content/data/settings.json"

const Header = () => {
  return (
    <header className="headingWrapper">
      <Link to="/">
        <div className="logoWrapper">
          <h1 className="logoTitle">{siteSettings.site_title}</h1>
        </div>
      </Link>
      <div className="linkWrapper">
        <div className="aboutWrapper">
          <Link to="/about">
            <span className="link-item">About</span>
          </Link>
        </div>
        <div className="contactWrapper">
          <Link to="/contact">
            <span className="link-item">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
