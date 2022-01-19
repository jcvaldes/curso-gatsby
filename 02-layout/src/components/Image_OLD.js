import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        sharp: childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  console.log(data)
  return <img src={data.image.sharp.fluid.src} alt="" />
}

export default Image
