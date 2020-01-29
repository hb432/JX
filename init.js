// add init array
global.jxinit = [];

// import module
var jx = require('./jx/library/core');

// execute init scripts
global.jxinit.forEach(function (script) {
   script(jx);
});

// global data storage
global.___data___ = {
   server: persist('jx-server'),
   player: {}
};

// report
console.log('JX Initialized.');

// todo
// documentation for jx.text, jx.util, jx.ty, jx.event
