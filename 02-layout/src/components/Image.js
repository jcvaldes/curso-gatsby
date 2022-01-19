import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Image = ({ fileName, alt }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(image => {
          return image.node.relativePath.includes(fileName)
        })
        // console.log(image)
        if (!image) return null

        return (
          <Img alt={alt} fluid={image.node.childImageSharp.fluid} width="300" />
        )
      }}
    />
  )
}
export default Image
