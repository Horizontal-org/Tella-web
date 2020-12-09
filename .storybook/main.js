const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/preset-scss'],
  webpackFinal: async (config) => {
    ;(config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['next/babel'],
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        include: path.resolve(__dirname, '../components'),
        use: [
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, '../postcss.config.js'),
              },
              ident: 'postcss',
              sourceMap: true,
            },
          },
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
