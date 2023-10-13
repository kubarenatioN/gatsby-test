// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}

export const Head = () => <title>About Us</title>

// Step 3: Export your component
export default AboutPage