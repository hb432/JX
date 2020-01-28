var player = require('./event/player');
var entity = require('./event/entity');

module.exports = {
   store: [],
   on: function (event, listener) {
      var listeners = jx.util.auto(jx.event.store, event, []);
      if (events[event] && listeners.length === 0) {
         events[event](function (data) {
            jx.event.fire(event, data);
         });
      }
      return listeners.push(listener);
   },
   fire: function (event, data) {
      var listeners = jx.util.auto(jx.event.store, event, []);
      return listeners.map(function (listener) {
         return listener(data);
      });
   },
   player: player,
   entity: entity
};
