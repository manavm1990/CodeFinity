module.exports = {
  siteMetadata: {
    title: "CodeFinity",
    description:
      "Manav Misra AKA CodeFinity is a fullstack JavaScript developer, teacher, trainer and mentor.",
    author: `@gocodefinity`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "CodeFinity",
        start_url: "/",
        background_color: `#333`,
        theme_color: "#7851a9",
        display: "standalone",
        icon: `src/assets/images/code.webp`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        basePath: `/decks`,
      },
    },
  ],
}
