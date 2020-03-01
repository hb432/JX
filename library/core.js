module.exports = {
   /**
    * execute a script for all online players
    * @param {function} script the script to execute
    * @param {*} [exception] a player to skip during execution
    * @returns {*[]} script output for each player
    * @example
    * // send 'hello world' to all online players
    * jx.all(function (player) {
    *    player.text('hello world');
    * });
    */
   all: function (script, exception) {
      return jx.ar(server.onlinePlayers).map(function (player) {
         if (exception && jx.player(exception).uuid === jx.player(player).uuid) {
            return false;
         }
         return script(jx.player(player));
      });
   },
   api: {
      attribute: org.bukkit.attribute.Attribute,
      enchantment: org.bukkit.enchantments.Enchantment,
      entityType: org.bukkit.entity.EntityType,
      equipmentSlot: org.bukkit.inventory.EquipmentSlot,
      gameRule: org.bukkit.GameRule,
      itemFlag: org.bukkit.inventory.ItemFlag,
      lootTables: org.bukkit.loot.LootTables,
      material: org.bukkit.Material,
      operation: org.bukkit.attribute.AttributeModifier.Operation,
      potionEffectType: org.bukkit.potion.PotionEffectType,
      sound: org.bukkit.Sound,
      soundCategory: org.bukkit.SoundCategory
   },
   /**
    * converts an iterable object, such as a java list or arguments, to an array
    * @param {*} input the iterable object to convert
    * @returns {array} converted array
    * @example
    * // function which returns passed arguments as array
    * var returnArgs = function () {
    *    return jx.ar(arguments);
    * };
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
    * replaces any ampersands in the input with section signs
    * @param {string} text the text to colorize
    * @returns {string} the colorized text
    * @see https://minecraft.gamepedia.com/Formatting_codes
    * @example
    * // log "hello & goodbye world" to the console in bold red
    * console.log(jx.color('&4&lhello && goodbye world'));
    */
   color: function (text) {
      return text.toString().split('&').join('\xA7').split('\xA7\xA7').join('&');
   },
   /**
    * send a command with the server console
    * @param {string} command the command to send
    * @example
    * // say "hello world" as the console
    * jx.console('say hello world');
    */
   console: function (command) {
      server.dispatchCommand(server.consoleSender, command.toString());
   },
   data: require('./data.js'),
   event: require('./event.js'),
   init: require('./init.js'),
   /**
    * display an inventory interface for player
    * @param {*} player the player to display the inventory to
    * @param {number} rows the number of rows
    * @param {string} title the inventory title
    * @param {*} items the items in the interface
    * @example
    * // make an interface, 3 rows with stone blocks filling the 2nd and 7th columns of each row
    * // show the infinity enchantment on the stone in row 1 column 2
    * // make the stone in row 3 column 7 have the player run /say wow
    * jx.interface(player, 3, 'Stone Columns', {
    *    12: {
    *       type: $('!!!stone')
    *    },
    *    22: {
    *       type: 'stone'
    *    },
    *    32: {
    *       type: 'stone'
    *    },
    *    17: {
    *       type: 'stone'
    *    },
    *    27: {
    *       type: 'stone'
    *    },
    *    37: {
    *       type: 'stone',
    *       command: '/say wow'
    *    }
    * })
    */
   interface: function (player, rows, title, items) {
      player = jx.player(player).instance;
      player.closeInventory();
      var inv = server.createInventory(player, Number(rows) * 9, title.toString());
      var data = jx.data.server('interface');
      var uuid = inv.hashCode().toString();
      data[uuid] = {};
      Object.keys(items).forEach(function (key) {
         var slot = key + '';
         slot = (Number(key[0]) - 1) * 9 + (Number(key[1]) - 1);
         var item = items[key].item;
         if (jx.ty(item) === 'string') item = jx.spawn.item(item);
         else if (jx.ty(item) === 'Array') item = jx.spawn.item.apply(0, item);
         if (items[key].title) item = $(item).meta('displayName', jx.color(items[key].title)).item;
         if (items[key].description) item = $(item).meta('lore', items[key].description).item;
         inv.setItem(slot, $(item.item || item).flag('attributes').item);
         data[uuid][slot] = {
            command: items[key].command,
            event: items[key].event,
            trigger: items[key].trigger ? items[key].trigger + '' : void 0
         };
      });
      player.openInventory(inv);
   },
   /**
    * modify a permission of a player
    * @param {*} target the player to modify a permission of
    * @param {string} permission the permission to modify
    * @param {boolean} value the permission value, omit to remove explicit value
    * @example
    * // grant "worldedit.*" to a player
    * jx.permission(player, 'worldedit.*', true);
    */
   permission: function (target, permission, value) {
      var player = jx.player(target).instance;
      switch (value) {
         case null:
         case void 0:
            player.effectivePermissions.forEach(function (info) {
               if (info.permission === permission) {
                  player.removeAttachment(info.attachment);
               }
            });
            break;
         case true:
         case false:
            var plugin = server.pluginManager.getPlugin('scriptcraft');
            player.addAttachment(plugin, permission, value);
            break;
      }
      jx.data.player(player, 'permission')[permission] = value;
   },
   /**
    * @callback jx_player$data
    * @returns {*} the fetched data
    */
   /**
    * @callback jx_player$text
    * @param {string} message the message to send
    * @param {'chat'|'action'|'title'} [mode] the message type, default 'chat'
    * @param {boolean} [color] wrap text in jx.color, default true
    */
   /**
    * a wrapper function for player fetching
    * 
    * can use player name string, player uuid string, player online instance,
    * player offline instance, or the output of this function as query parameter
    * @param {*} query the player to fetch
    * @returns {{
    *    uuid: string, instance: *, online: boolean, name: string, offline: *, data: jx_player$data,
    *    text: jx_player$text
    * }}
    * @example
    * // fetch player 'harrix432'
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
      output.text = function (message, type, color) {
         return jx.text(player, message, type, color);
      };
      return output;
   },
   /**
    * select entities via the vanilla target selection syntax
    * 
    * the &#064; symbol can optionally be omitted from the selector
    * @param {string} selector the target selector
    * @param {*} context the perspective from which the selector is executed
    * @returns {array} array of selected entities
    * @see https://minecraft.gamepedia.com/Commands#Target_selectors
    * @example
    * // select all entities within 25 blocks of player
    * var entities = jx.query('e[distance=0..25]', player);
    */
   query: function (selector, context) {
      selector = selector[0] === '@' ? selector : '@' + selector;
      return jx.ar(server.selectEntities(context || server.consoleSender, selector));
   },
   rand: {
      /**
       * return a random integer between 0 and "limit"
       * @param {number} limit the maximum value of the random number
       * @returns {number} the output number
       * @example
       * // return a random integer between 0 and 20
       * jx.rand.integer(20);
       */
      integer: function (limit) {
         return Math.floor(Math.random() * Math.abs(limit + 1));
      },
      /**
       * return a random integer between min and max
       * @param {number} min the minumum number, can be negative
       * @param {number} max the maximum number, can be negative
       * @returns {number} the output number
       * @example
       * // return a random integer between -10 and 10
       * jx.rand.minmax(-10, 10);
       */
      minmax: function (min, max) {
         return jx.rand.integer(max - min) + min;
      },
      /**
       * return a random boolean
       * @param {number} chance the chance value (0-1)
       * @returns {boolean} the output boolean
       * @example
       * // return "true" value 1 out of 7 times
       * jx.rand.chance(1 / 7);
       */
      chance: function (chance) {
         return Math.random() < chance;
      }
   },
   spawn: require('./spawn.js'),
   storage: {
      item: require('./storage/item.js'),
      inventory: require('./storage/inventory.js')
   },
   /**
    * send a message to player
    * 
    * if title mode is used, the title and subtitle are divided with a new line character
    * @param {*} player the player to send text to
    * @param {string} message the message to send
    * @param {'chat'|'action'|'title'} [mode] the message type, default 'chat'
    * @param {boolean} [color] wrap text in jx.color, default true
    * @example
    * // send 'hello world' to player
    * jx.text(player, 'hello world');
    */
   text: function (player, message, mode, color) {
      player = jx.player(player).instance;
      mode = mode || 'text';
      color = color || true;
      if (color) message = jx.color(message);
      switch (mode) {
         case 'text':
            player.sendMessage(message);
            break;
         case 'action':
            var actionBar = Java.type('net.md_5.bungee.api.ChatMessageType').ACTION_BAR;
            var textComponent = Java.type('net.md_5.bungee.api.chat.TextComponent');
            player.sendMessage(actionBar, new textComponent(message));
            break;
         case 'title':
            var halves = message.split('\n');
            player.sendTitle(halves[0] || '', halves[1] || '');
            break;
      }
   },
   /**
    * fetches the input object's type, first checking for null and void, next typeof, then
    * object.constructor.name, and finally toString.call
    * @param {*} object the object to check
    * @returns {string} the checked type
    * @example
    * // return the item stack type string
    * jx.ty(jx.spawn.item('stone'));
    */
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
   util: require('./util.js'),
   wrappers: require('./wrappers.js')
};
