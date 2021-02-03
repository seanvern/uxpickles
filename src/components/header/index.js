import React from "react"
// import { Link } from "gatsby"

import "./index.css"

import siteSettings from "../../../content/data/settings.json"

const Header = () => {
  //   let header

  //   if (isRootPath) {
  //     header = (
  //       <h1 className="main-heading">
  //         <Link to="/">{siteSettings.site_title}</Link>
  //       </h1>
  //     )
  //   } else {
  //     header = (
  //       <Link className="header-link-home" to="/">
  //         {siteSettings.site_title}
  //       </Link>
  //     )
  //   }
  //   return header

  return (
    <div className="main-heading">
      <h1>{siteSettings.site_title}</h1>
      <div className="link-container">
        <span className="link-item">About</span>
        <span className="link-item">Contact</span>
      </div>
    </div>
  )
}

export default Header
