const {
  override,
  setWebpackPublicPath
} = require('customize-cra')

module.exports = override(
  setWebpackPublicPath(process.env.NODE_ENV === 'production' ? '/pwa' : './'), (config) => {
    // console.log(config.output)
    return config
  }
)