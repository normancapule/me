module.exports = {
  siteMetadata: {
    title: `John Norman Capule`,
    description: `I'm a frontend and backend developer specialized in Ruby on Rails, JS and CSS. Let's work together and build ideas.`,
    author: `johnnormancapule@gmail.com`,
    links: {
      email: `johnnormancapule@gmail.com`,
      github: `https://github.com/normancapule`,
      linkedin: `https://www.linkedin.com/in/johnnormancapule`,
      twitter: `https://twitter.com/normzcapule`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Normz Website`,
        short_name: `normz`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
