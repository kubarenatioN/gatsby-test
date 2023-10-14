import * as React from 'react'
import { Layout, Seo } from '../../components'

const BlogPost = () => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost