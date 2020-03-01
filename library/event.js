var player = require('./event/player.js');
var entity = require('./event/entity.js');
var server = require('./event/server.js');

module.exports = {
   store: [],
   /**
    * apply an event listener to an event name
    * @param {string} event the event name
    * @param {function} listener the listener to apply
    * @returns {number} the total number of listeners for the event name
    * @example
    * // set the server motd to 'hello world' in italic blue
    * jx.event.on('serverListPing', function (event) {
    *    event.setMotd(jx.color('&9&ohello world'));
    * });
    */
   on: function (event, listener) {
      var listeners = jx.util.auto(jx.event.store, event, []);
      if (events[event] && listeners.length === 0) {
         events[event](function (data) {
            jx.event.fire(event, data);
         });
      }
      return listeners.push(listener);
   },
   /**
    * manually trigger all event listeners for an event name
    * @param {string} event the event name
    * @param {*} data the data to pass into each listener
    * @returns {array} array of listener outputs
    * @example
    * // trigger a fake server list ping event
    * jx.event.fire('serverListPing', {
    *    setMotd: function (motd) { console.log('custom motd: ' + motd); }
    * });
    */
   fire: function (event, data) {
      var listeners = jx.util.auto(jx.event.store, event, []);
      return listeners.map(function (listener) {
         return listener(data);
      });
   },
   player: player,
   entity: entity,
   server: server
};
