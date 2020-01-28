// add init array
global.jxinit = [];

// import modules
var jx = (global.jx = require('./library/core'));

// execute init scripts
global.jxinit.forEach(function (script) {
   script(global.jx);
});

// report
console.log('JX Initialized.');

// todo
// documentation for jx.text, jx.util, jx.ty, jx.event
