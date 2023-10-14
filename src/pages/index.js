import * as React from 'react'
import { Seo, Layout } from '../components'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/photo.png" />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage;