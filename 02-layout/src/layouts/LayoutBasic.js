import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./LayoutBasic.css"

const LayoutBasic = props => {
  const { children } = props

  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div>
      {/* <h1>Title App</h1> */}
      <div className="header">
        <h1>{data.site.siteMetadata.title}</h1>
        <div className="menu">
          {/* <p>Index</p>
          <p>About</p> */}
          <Link to="/">Home</Link>
          <Link to="/about-me">About</Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default LayoutBasic
