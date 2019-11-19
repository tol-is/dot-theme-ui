
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./compound-theme-ui.cjs.production.min.js')
} else {
  module.exports = require('./compound-theme-ui.cjs.development.js')
}
