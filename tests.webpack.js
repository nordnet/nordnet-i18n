// make phantomjs happy, polyfill .bind etc...
require('es5-shim');
const context = require.context('./src', true, /\.test\.js$/);
context.keys().forEach(context);
