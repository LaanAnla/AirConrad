/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-100vh-fix'),
  ]
}

module.exports = config