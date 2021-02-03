import React from "react"

import "./layout.css"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header isRootPath={isRootPath} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
