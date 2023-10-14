import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, siteTitle } from './layout.module.css'

export const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <div className={container}>
      <header className={siteTitle}>
        <h4>
          {data.site.siteMetadata.title}
        </h4>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  )
}