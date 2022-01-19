## Agrego sass

https://www.gatsbyjs.com/docs/how-to/styling/sass/#installing-and-configuring-sass

yarn add sass gatsby-plugin-sass

## Agregp svg

https://www.gatsbyjs.com/plugins/gatsby-plugin-svgr/?=svg
yarn add @svgr/webpack gatsby-plugin-svgr

## React bootstrap

https://react-bootstrap.github.io/components/buttons/

## Obtener datos del gatsby-config,js para el SEO

```
query SiteDataQuery {
  site {
    siteMetadata {
			title
      description
      author
    }
  }
}
```

## Obtener imagenes en graphql optimizadas

```
query getAllFile {
	allFile(filter:{sourceInstanceName: { eq: "images" }}) {
		nodes {
			relativePath
      absolutePath
      childImageSharp {
				fixed {
					src
        }
        fluid {
					src
          srcSet
          srcSetWebp
        }
      }
    }
  }
}
query getFileName {
	allFile(filter:{relativePath: { eq: "gatsby-astronaut.png" }}) {
		nodes {
			relativePath
      absolutePath
      childImageSharp {
				fixed {
					src
        }
        fluid {
					src
          srcSet
          srcSetWebp
        }
      }
    }
  }
}
```
