import * as React from 'react'
import { Layout, Seo } from '../components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h3>My cool posts will go in here</h3>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            <Link to={node.name}>
              {node.name}
            </Link>
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage