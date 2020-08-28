import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import Head from "../components/head";

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishedDate (formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Welcome to the Blog!</h1>
      <p>Posts will show up here</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage