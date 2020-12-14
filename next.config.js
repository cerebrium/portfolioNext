
module.exports = ({
  webpack: (config) => {
    config.module.rules.push(
    {
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'resume.pdf'
          }
        },
      ],
    },
    );
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
});