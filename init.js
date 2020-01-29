// init script storage
global.___init___ = {
   state: true,
   array: [],
   push: function (script) {
      var init = global.___init___;
      if (init.state === true) init.array.push(script);
   }
};

// persistent data storage
global.___data___ = {
   server: persist('jx-server'),
   player: {}
};

// import module
var jx = require('./index.js');

// execute pushed init scripts
global.___init___.array.forEach(function (script) {
   script(jx);
});

// disable init script pushing
global.___init___.state = false;

// report to console
console.log('JX Initialized.');

// todo
// documentation for jx.text, jx.util, jx.ty, jx.event, jx.$/block, jx.$/entity, jx.$/item
