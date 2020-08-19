import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { useStaticQuery, graphql } from "gatsby";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)

    return (
        <div>
            <Header />
            <h1>Welcome to the Blog!</h1>
            <p>Posts will show up here</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
            <Footer />
        </div>
    )
};

export default BlogPage