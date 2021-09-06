module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "kbollinsdev",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
  ],
};
