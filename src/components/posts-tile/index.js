import React from "react"
import { Link } from "gatsby"

import "./index.scss"

const Post = ({ post: post }) => {
  // const title = post.frontmatter.title || post.fields.slug
  return (
    <li className="post-container" key={post.title}>
      <div className="post-title">{post.title}</div>
      {/* <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article> */}
    </li>
  )
}

export default Post
