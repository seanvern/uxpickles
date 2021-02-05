import React from "react"

import Moment from "react-moment"

import "./index.scss"

const Post = ({ post }) => {
  const title = post.node.frontmatter.title
  const excerpt = post.node.excerpt
  const date = post.node.frontmatter.date
  return (
    <li className="post-container">
      <div className="post-date">
        <Moment format="MM/DD/YYYY">{date}</Moment>
      </div>
      <div className="post-title">{title}</div>
      <div className="post-details">{excerpt}</div>
    </li>
  )
}

export default Post
