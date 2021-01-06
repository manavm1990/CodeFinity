const path = require("path")

exports.onCreateWebpackConfig = ({ _, __, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
