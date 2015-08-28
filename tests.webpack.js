// make phantomjs happy, polyfill .bind etc...
require('es5-shim');

// Don't use native promises on Chrome since testing then will be harder using sinon.clock
global.Promise = require('es6-promise-polyfill').Promise;

//global.Promise = require('es6-promise').Promise;

// It's a pity we can't use the same promise library. I guess it expose the native promise if it's available
//global.Promise = require('native-promise-only');

const context = require.context('./lib', true, /\.test\.js$/);
context.keys().forEach(context);
