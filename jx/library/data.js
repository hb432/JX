module.exports = {
   store: {
      server: persist('jx-server'),
      player: {}
   },
   /**
    * access persistent server data
    * @param {...string} [path] the data path
    * @returns {object}
    * @example
    * // set context to jx.data.store.server
    * // for each key in path, set context to context[key]
    * // if context[key] is not defined, define it as {}
    * // once all keys are iterated through, return context
    * var claims = jx.data.server('territory', 'claims');
    */
   server: function () {
      return jx.util.traverse(jx.data.store.server, arguments);
   },
   /**
    * access persistent player data
    * @param {} player the target player
    * @param {...string} [path] the data path
    * @returns {object}
    * @example
    * // set context to jx.data.store.player[jx.player(player).uuid]
    * // for each key in path, set context to context[key]
    * // if context[key] is not defined, define it as {}
    * // once all keys are iterated through, return context
    * var nick = jx.data.player('chat', 'nick');
    */
   player: function (player) {
      var store = jx.data.store.player;
      player = jx.player(player);
      var data = store[player.uuid] || (store[player.uuid] = persist('jx-player.' + player.uuid));
      return jx.util.traverse(data, jx.ar(arguments).slice(1));
   }
};

global.jxinit.push(function (jx) {
   jx.all(jx.data.player);
});
