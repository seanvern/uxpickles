import React from "react"

import "../../styles/SiteWrapper.scss"

import Header from "../header/Header"
import Footer from "../footer/Footer"

const SiteWrapper = ({ children, data }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default SiteWrapper
