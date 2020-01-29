var wrappers = require('./wrappers.js');
var api = require('./api.js');
var event = require('./event.js');
var data = require('./data.js');
var ui = require('./ui.js');
var perm = require('./perm.js');
var rand = require('./rand.js');
var spawn = require('./spawn.js');
var storage = require('./storage.js');
var util = require('./util.js');
module.exports = {
   api: api,
   event: event,
   /**
    * execute a function for all players on the server.
    * @param {function} script the function to be executed
    * @param {} [exception] an optional exception to be excluded
    * @returns {undefined}
    * @example
    * // sends "hello there!" to everyone's chat.
    * jx.all(function (player) {
    *    jx.text(player, '&ahello there!');
    * });
    */
   ar: function (input) {
      if (input.forEach) {
         var array = [];
         input.forEach(function (value) {
            array.push(value);
         });
         return array;
      } else {
         return [].slice.call(input);
      }
   },
   /**
    * execute a function for all players on the server.
    * @param {function} script the function to be executed
    * @param {} [exception] an optional exception to be excluded
    * @returns {undefined}
    * @example
    * // sends "Hello there!" to everyone's chat.
    * jx.all(function (player) {
    *    jx.text(player, '&aHello there!');
    * });
    */
   all: function (script, exception) {
      server.onlinePlayers.forEach(function (player) {
         if (exception && jx.player(exception).uuid === jx.player(player).uuid) {
            return false;
         }
         script(jx.player(player));
      });
   },
   /**
    * convert essentials-style color strings into bukkit-compatible color strings
    * @param {string} text the text to be converted
    * @see https://minecraft.gamepedia.com/Formatting_codes
    * @returns {string}
    * @example
    * // sets this item's display name to "green pickaxe" in a bright green color
    * $(item).meta('displayName', jx.color('&agreen pickaxe'));
    */
   color: function (text) {
      return text.toString().split('&').join('\xA7').split('\xA7\xA7').join('&');
   },
   /**
    * send a command through the console
    * @param {string} command the command to be executed
    * @returns {undefined}
    * @example
    * // INFINITE POWER!
    * jx.console('op ' + self.name);
    */
   console: function (command) {
      server.dispatchCommand(server.consoleSender, command.toString());
   },
   data: data,
   perm: perm,
   /**
    * fetch a player on the server
    * @param {} player the target player
    * @returns {{uuid:string,instance:object,online:boolean,name:string,data:function,offline:object}}
    * @example
    * // if a player is found, the output will be consistent no matter the method of discovery
    * // valid inputs for the "player" argument
    * // - player name
    * // - player UUID
    * // - player object from an event listener
    * // - the output of jx.player(player)
    * // - the output of server.getPlayer(player)
    * // - the output of server.getOfflinePlayer(player)
    * // - an object with "object.uniqueId" set to the player's UUID
    * var player = jx.player('harrix432');
    */
   player: function (query) {
      if (query.uuid) {
         return query;
      }
      var output = {};
      var players = jx.data.server('players');
      var player = query.uniqueId ? query : server.getOfflinePlayer(players[query] || query);
      output.uuid = player.uniqueId.toString();
      output.instance = server.getPlayer(player.uniqueId);
      output.online = !!output.instance;
      output.name = players[output.uuid];
      output.offline = server.getOfflinePlayer(java.util.UUID.fromString(output.uuid));
      output.data = function () {
         return jx.util.traverse(jx.data.player(output), arguments);
      };
      return output;
   },
   /**
    * fetch an entity or entities with the vanilla selection system
    * @param {string} selector the selector string
    * @param {} [context] the player to execute the command from, defaults to console
    * @returns {object[]}
    * @example
    * // get all skeletons within 20 blocks of player
    * jx.query('@e[type=skeleton,distance=0..20]', player);
    */
   query: function (selector, context) {
      return server.selectEntities(context || server.consoleSender, selector);
   },
   rand: rand,
   spawn: spawn,
   storage: storage,
   text: function (player, message, mode) {
      player = jx.player(player).instance;
      if (mode === true) {
         var bkClass = Java.type('net.md_5.bungee.api.ChatMessageType').ACTION_BAR;
         var bkClass2 = Java.type('net.md_5.bungee.api.chat.TextComponent');
         player.sendMessage(bkClass, new bkClass2(jx.color(message)));
      } else if (mode === false) {
         player.sendMessage(message);
      } else {
         player.sendMessage(jx.color(message));
      }
   },
   ty: function (object) {
      if (object == null) {
         return object + '';
      } else if (typeof object === 'object') {
         var name = (object.constructor || {}).name || 'Object';
         return name === 'Object' ? toString.call(object).slice(8, -1) : name;
      } else {
         return typeof object;
      }
   },
   ui: ui,
   util: util,
   wrappers: wrappers
   /*
   val: function (context, path, key, value) {
      var cc = context;
      var nodes = path.split('.');
      var vars = [];
      nodes.forEach(function (node) {
         if (cc[node]) {
            vars.push(cc[node]);
            cc = cc[node];
         }
      });
      cc['set' + jx.util.pascal(key)](value);
      vars.reverse();
      vars[0]['set' + jx.util.pascal(key)](cc);
      cc = vars[0];
      vars.slice(1).forEach(function (vr, index) {
         vr['set' + jx.util.pascal(nodes.reverse()[index])](cc);
         cc = vr;
      });
      return cc;
   }
   */
};

global.___init___.push(function (jx) {
   global._ = jx.wrappers._;
   global.$ = jx.wrappers.$;
});
