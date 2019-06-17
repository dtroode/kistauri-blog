import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/post.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const link = "https://dtroode.netlify.com" + post.fields.slug;
  return (
    <Layout pageClass="post" title={post.frontmatter.title} category={post.frontmatter.categories}>
     <section className="text">
       <p className="date-mins">{post.frontmatter.date} • {post.timeToRead} min read</p>
       <div dangerouslySetInnerHTML={{ __html: post.html }} />
     </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        categories
      }
    }
  }
` 