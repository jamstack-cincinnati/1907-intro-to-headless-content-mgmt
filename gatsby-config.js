let cfg = require("./src/resources/constants");

module.exports = {
  siteMetadata: {
    title: `JAMstack Cincinnati`,
    description: `Kick off a static site in Gatsby.`,
    author: `JAMstack Cincinnati`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/resources/`
      }
    },
    // Add Web Font Loader options here
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Dosis", "Nunito:400,600,700"]
        }
      }
    },

    // ...
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: cfg.CONTENTFUL_SPACE_ID,
        accessToken: cfg.CONTENTFUL_ACCESS_TOKEN
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
