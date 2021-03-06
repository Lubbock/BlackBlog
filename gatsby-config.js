module.exports = {
  siteMetadata: {
    title: `Bb`,
    siteUrl: `https://blackblog.gtsb.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogs`,
      }
    },
  ],
}
