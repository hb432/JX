module.exports = {
   store: {
      server: persist('jx-server'),
      player: {}
   },
   /**
    * access and edit server data
    * 
    * each argument is a node in the data path
    * 
    * modifications to the returned object will persist across reloads.
    * @returns {*} the fetched data
    * @example
    * // now, store current state value
    * jx.data.server('hello', 'world').state = true;
    * 
    * // later, perhaps post-reload, display stored state value
    * console.log(jx.data.server('hello', 'world').state);
    */
   server: function () {
      return jx.util.traverse(jx.data.store.server, arguments);
   },
   /**
    * fetch data specific to player
    * 
    * each argument after player is a node in the data path
    * 
    * modifications to the returned object will persist across reloads.
    * @param {*} player the player whose data should be fetched
    * @returns {*} the fetched data
    * @example
    * // now, store current health value
    * jx.data.player(player, 'health').value = player.instance.health;
    * 
    * // later, perhaps post-reload, display stored health value
    * console.log(jx.data.player(player, 'health').value);
    */
   player: function (player) {
      var store = jx.data.store.player;
      player = jx.player(player);
      var data = store[player.uuid] || (store[player.uuid] = persist('jx-player.' + player.uuid));
      return jx.util.traverse(data, jx.ar(arguments).slice(1));
   }
};
