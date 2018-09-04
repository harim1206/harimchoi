module.exports = {
  siteMetadata: {
    title: 'Harim Choi',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },

    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]

}
