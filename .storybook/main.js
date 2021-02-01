const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)', '../layouts/**/*.stories.@(ts|tsx)'],
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig
    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    }

    // NextJs uses css-modules outside the postcss.config.js configuration
    // With these lines we modify the behavior of css-loader to generate the
    // css modules. It's hack to imitate the behavior of nextjs in storybook
    // as much as possible.

    newConfig.module.rules.find(
      (rule) => rule.test.toString() === '/\\.css$/'
    ).exclude = /\.module\.css$/

    newConfig.module.rules.push({
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../components'),
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
    })

    return newConfig
  },
}
