module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: `http://54.236.22.95/graphql`
            }
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}