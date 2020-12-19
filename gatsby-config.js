/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Cafe de L'Coy`,
    author: `Jericho Irvin`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Marck Script`,
          `Great Vibes`,
          `Roboto Slab`,
          `Libre Baskerville\:400i`,
        ],
        display: `swap`,
      },
    },
  ],
}
