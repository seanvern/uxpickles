import React from "react"
import { graphql } from "gatsby"

import SiteWrapper from "../components/siteWrapper/SiteWrapper"

import Hero from "../components/hero/Hero"
import PostsContainer from "../components/postsWrapper/PostsWrapper"

const BlogIndex = ({ data, location }) => {
  return (
    <SiteWrapper location={location} data={data}>
      <Hero />
      <PostsContainer data={data} />
      {/* <SEO title="All posts" /> */}
    </SiteWrapper>
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
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
