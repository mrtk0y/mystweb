const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     var $ = require("jquery")(window);
// });
// const $ = require("jquery");

// const bootstrap = require('bootstrap');

global.jQuery = global.$ = require('jquery');
require('bootstrap');

console.log('Hello');