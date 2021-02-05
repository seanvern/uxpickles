import React from "react"

import Post from "../../components/posts-tile"

import "./index.scss"

const PostsContainer = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges
  return (
    <div className="posts-wrapper">
      <h1 className="posts-heading">Fresh Picks</h1>
      <div className="posts-container">
        {blogPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <button className="load-more">Load More</button>
    </div>
  )
}

export default PostsContainer
