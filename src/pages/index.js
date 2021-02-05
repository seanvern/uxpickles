import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostsContainer from "../containers/posts-container/index.js"
import SEO from "../components/seo"

import Hero from "../components/hero-component"
import Header from "../components/header"

import siteSettings from "../../content/data/settings.json"

import Post from "../components/posts-tile"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Hero />
        {/* <SEO title="All posts" /> */}
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <SEO title="All posts" /> */}
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          return <Post post={post} />
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
