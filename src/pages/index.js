import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import Hero from "../components/hero-component"

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location} data={data}>
      <Hero />
      {/* <SEO title="All posts" /> */}
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query PostsContainerQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
