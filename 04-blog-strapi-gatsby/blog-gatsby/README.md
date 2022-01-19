## Conectando gatsby con strapi

Bajar el plugin

![](assets/2021-12-04-18-19-29.png)

https://www.gatsbyjs.com/plugins/gatsby-plugin-svgr/?=svg

## Reemplazar

![](assets/2021-12-04-18-32-04.png)

por

![](assets/2021-12-04-18-33-13.png)

## Instalar svg

https://www.gatsbyjs.com/plugins/gatsby-plugin-svgr/?=svg

## Instalar sass

https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/?=sass

## Instalar semantic UI

https://react.semantic-ui.com/usage

## Instalar plugin strapi y verificar si accede a la api

```
query {
  allStrapiPost {
    nodes {
			title
      miniatura {
				url
      }
    }
  }
}
```
