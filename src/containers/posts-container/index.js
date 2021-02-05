import React from "react"

import Post from "../../components/posts-tile"

import "./index.scss"

const sample = [
  { title: "test" },
  { title: "test" },
  { title: "test" },
  { title: "test" },
]

const PostsContainer = posts => {
  return (
    <div className="posts-wrapper">
      <h1 className="posts-heading">Fresh Picks</h1>
      <div className="posts-container">
        {sample.map(post => (
          <Post post={post} />
        ))}
      </div>
      <button className="load-more">Load More</button>
    </div>
  )
}

export default PostsContainer
