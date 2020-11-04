module.exports = {
  siteMetadata: {
    title: `kimmoihanus.com - Kimmo's notes on code`,
    description: `Kimmo Ihanus' notes on code`,
    author: 'Kimmo Ihanus',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/ihmissuti/kimmoihanus-com-code-notes',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        openSearch: {
          siteShortName: `Kimmo's notes on code`,
          siteUrl: 'https://www.kimmoihanus.com',
          siteTags: 'development',
          siteContact: 'https://twitter.com/ihmissuti',
          siteDescription:
            'Notes on code by Kimmo Ihanus.',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: `Kimmo's Code Notes`,
        // short_name: `CodeNotesByKimmo`,
        // description: `Notes on code. By Kimmo Ihanus.`,
        // start_url: `/`,
        // background_color: `hsl(210, 38%, 95%)`,
        // theme_color: `hsl(345, 100%, 69%)`,
        // display: `standalone`,
        icon: `public/static/favicon-32x32.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/*`, `/tag/*`],
    //   },
    // },
  ],
}
