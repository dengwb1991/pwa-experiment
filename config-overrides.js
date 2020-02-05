const {
  override,
  setWebpackPublicPath
} = require('customize-cra')

module.exports = override(
  setWebpackPublicPath('/pwa')
)