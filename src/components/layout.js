import React from "react"

import "./layout.css"

import Header from "../components/header"
import Footer from "../components/footer"
import PostsContainer from "../containers/posts-container"

const Layout = ({ children, data }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <PostsContainer data={data} />
      <Footer />
    </div>
  )
}

export default Layout
