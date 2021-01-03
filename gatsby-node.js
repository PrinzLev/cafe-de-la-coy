const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MenuQuery {
      allContentfulCafeMenu {
        nodes {
          slug
        }
      }
      allContentfulMainMenu {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allContentfulMainMenu.nodes.forEach(item =>
    createPage({
      path: `/menu/${item.slug}`,
      component: path.resolve(`src/templates/main-menu.template.js`),
      context: {
        slug: item.slug,
      },
    })
  )
  result.data.allContentfulCafeMenu.nodes.forEach(item =>
    createPage({
      path: `/menu/${item.slug}`,
      component: path.resolve(`src/templates/cafe-menu.template.js`),
      context: {
        slug: item.slug,
      },
    })
  )
}
