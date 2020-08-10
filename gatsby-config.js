module.exports = {
  siteMetadata: {
    title: "Front-end Web",
    author: "Huynh Nguyen Ha Nam"
  },
  plugins: [
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
