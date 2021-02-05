import React from "react"
import { Link } from "gatsby"

import Moment from "react-moment"

import "../../styles/PostsTile.scss"

const Post = ({ post }) => {
  const title = post.node.frontmatter.title
  const excerpt = post.node.excerpt
  const date = post.node.frontmatter.date
  const slug = post.node.fields.slug
  return (
    <li className="post-container">
      <div className="post-date">
        <Moment format="MM/DD">{date}</Moment>
      </div>
      <div className="post-title">{title}</div>
      <div className="post-details">{excerpt}</div>
      <Link to={slug}>Test</Link>
    </li>
  )
}

export default Post
