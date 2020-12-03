const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: [],
  presets: ['@storybook/preset-scss'],
  webpackFinal: async (config, _) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    return config
  },
}
