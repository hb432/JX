//////////////////////////////////////////////////////////////////////
//                                                                  //
//  ########  ########  ########  ########            ##  ########  //
//  ##        ##    ##  ##    ##  ##                  ##  ##        //
//  ##        ##    ##  ##    ##  ##                  ##  ##        //
//  ##        ##    ##  ########  #######             ##  ########  //
//  ##        ##    ##  ## ###    ##                  ##        ##  //
//  ##        ##    ##  ##  ###   ##                  ##        ##  //
//  ########  ########  ##   ###  ########  ##  ########  ########  //
//                                                                  //
//////////////////////////////////////////////////////////////////////

module.exports = {
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

   val: function (context) {
      var args = jx.ar(arguments).slice(0, -2);
      var final = jx.ar(arguments).slice(-2);
      var key = final[0];
      var value = final[1];
      var current = 0;
      var vars = [];
      while (current < args.length) {
         vars[current] = context;
         jx.test.push([ context, args[current] ]);
         context = context[args[current]];
         ++current;
      }
      while (current > 0) {
         context['set' + jx.util.pascal(key)](value);
         key = args[current];
         value = vars[current];
         --current;
         context = vars[current];
      }
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
   data: {
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
   },

   /**
    * create an interactive GUI for players
    * @param {} player the target player
    * @param {number} rows the number of rows (1-6)
    * @param {string} title the title at the top of the GUI
    * @param {} items the clickable items in the GUI
    * @returns {undefined}
    * @example
    * // create an interface with 2 clickable items
    * // one attempts to teleport you to your bed via an event listener
    * // the other teleports you to spawn with a command
    * // 13 and 15 are the slot numbers
    * // slot numbers can be from zero to (rows * 9) - 1
    * jx.interface(player, 3, 'Got Respawns?', {
    *    13: {
    *       stack: $(jx.spawn.item('red_bed')).meta('displayName', 'Bed Spawn Location').item,
    *       event: 'respawn-bed'
    *    },
    *    15: {
    *       stack: $(jx.spawn.item('bedrock').meta('displayName', 'Server Spawn Location')).item,
    *       command: '/spawn'
    *    }
    * });
    * 
    * // event listener for the bed teleport option
    * jx.event.on('respawn-bed', function (player) {
    *    var instance = jx.player(player).instance;
    *    if (instance.bedSpawnLocation) {
    *       jx.text(player, '&3Teleporting...');
    *       instance.teleport(instance.bedSpawnLocation);
    *    } else {
    *       jx.text(player, '&cNo bed spawn set!');
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
      Object.keys(items).forEach(function (slot) {
         var item = items[slot];
         inv.setItem(slot, item.stack);
         data[uuid][slot] = { command: item.command, event: item.event };
      });
      player.openInventory(inv);
   },

   /**
    * grant, revoke, or remove permission nodes to and from the player
    * 
    * these permission nodes will persist across restarts, reloads, etc.
    * @param {} player the target player
    * @param {string} permission the permission to modify
    * @param {boolean|null} value the permission value
    * @returns {undefined}
    * @example
    * // grant access to jx.command.sudo
    * jx.perm(player, 'jx.command.sudo', true)
    * 
    * // deny access to worldedit.*
    * jx.perm(player, 'worldedit.*', false)
    * 
    * // use server/plugin default for essentials.tpa
    * jx.perm(player, 'essentials.tpa', null)
    */
   perm: function (target, permission, value) {
      var player = jx.player(target).instance;
      switch (value) {
         case null:
            player.effectivePermissions.forEach(function (info) {
               if (info.permission === permission) {
                  player.removeAttachment(info.attachment);
               }
            });
            break;
         case true:
         case false:
            player.addAttachment(__plugin, permission, value);
            break;
      }
      jx.data.player(player, 'perm')[permission] = value;
   },

   /**
    * fetch a player on the server
    * @param {} player the target player
    * @returns {{uuid:string,instance:object,online:boolean,name:string|null,data:function}}
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
   rand: {
      /**
       * return a random integer between 0 and "limit"
       * @param {number} limit the maximum value of the random number
       * @returns {number}
       * @example
       * // random number between 0 and 20
       * var RNG = jx.rand.integer(20);
       */
      integer: function (limit) {
         return Math.floor(Math.random() * Math.abs(limit + 1));
      },
      /**
       * return a random integer between min and max
       * @param {number} min the minumum number, can be negative
       * @param {number} max the maximum number, can be negative
       * @returns {number}
       * @example
       * // random number between -10 and 10
       * var jx.rand.integer(-10, 10);
       */
      minmax: function (min, max) {
         return jx.rand.integer(max - min) + min;
      },
      /**
       * return a random boolean
       * @param {number} chance the chance value (0-1)
       * @returns {boolean}
       * @example
       * // return "true" value 1 out of 7 times
       * jx.rand.chance(1 / 7);
       * 
       * // return "true" value 50% of the time
       * jx.rand.chance(0.5);
       */
      chance: function (chance) {
         return Math.random() < chance;
      }
   },
   spawn: {
      /**
       * set the block at a location and return it
       * @param {} location the location of the block
       * @param {string} type the block type to set it to
       * @returns {}
       * @example
       * // set the block at 420x, 69y, 1337z to stone
       * jx.spawn.block({ world: 'world', x: 420, y: 69, z: 1337 }, 'stone');
       * 
       * // set the block below player location to netherrack
       * var location = jx.player(player).instance.location;
       * location.y -= 1;
       * jx.spawn.block(location, 'stone');
       */
      block: function (location, type) {
         return $(jx.util.loc(location).block).set(type).block;
      },
      /**
       * spawn an entity at a location
       * @param {} location the location to spawn the entity
       * @param {string} type the entity type
       * @returns {}
       * @example
       * // executed from chat, spawn zombie at sender location
       * jx.spawn.entity(self.location, 'zombie');
       */
      entity: function (location, type) {
         location = jx.util.loc(location);
         return location.world.spawnEntity(location, jx.api.entityType[type.toString()]);
      },
      /**
       * create a new item
       * @param {string} type the item type
       * @param {number} [amount=1] optional item amount (default: 1)
       * @returns {}
       * @example
       * // create 8 ender pearls
       * jx.spawn.item('ender_pearl', 8);
       */
      item: function (type, amount) {
         return new org.bukkit.inventory.ItemStack(jx.api.material[type.toString()], Number(amount) || 1);
      },
      /**
       * play a sound for a player
       * @param {} player the target player
       * @param {string} type the sound name
       * @param {{category: string, }} options
       * @returns {}
       * @example
       * // play the creeper ignite sound to player
       * jx.spawn.sound(player, 'entity.creeper.primed')
       * 
       * // a little melody, perhaps?
       * jx.util.multi(jx.spawn.sound, {
       *    0: [player, 'block.note.block.basedrum'],
       *       0: [player, 'block.note.block.bit', { pitch: 1 }],
       *       250: [player, 'block.note.block.bit', { pitch: 0.75 }],
       *    500: [player, 'block.note.block.basedrum'],
       *    500: [player, 'block.note.block.snare'],
       *       500: [player, 'block.note.block.bit', { pitch: 1 }],
       *       750: [player, 'block.note.block.bit', { pitch: 0.75 }],
       *    1000: [player, 'block.note.block.basedrum'],
       *       1000: [player, 'block.note.block.bit', { pitch: 1 }],
       *       1250: [player, 'block.note.block.bit', { pitch: 0.75 }],
       *    1500: [player, 'block.note.block.basedrum'],
       *    1500: [player, 'block.note.block.snare'],
       *       1500: [player, 'block.note.block.bit', { pitch: 1 }],
       *       1750: [player, 'block.note.block.bit', { pitch: 0.75 }],
       * });
       */
      sound: function (player, type, options) {
         options = options || {};
         player = jx.player(player).instance;
         var type = jx.api.sound[type.toString()];
         var category = jx.api.soundCategory[(options.category || 'master').toString()];
         var location = jx.util.loc(options.location || player.location);
         player.playSound(location, type, category, options.volume || 1, options.pitch || 1);
      }
   },
   /**
    * send text to a player
    * @param {string} player the target player
    * @param {string} message the message to send
    * @param {boolean} [mode] the type of message to send -- default: color text, true: action bar, false: plain text
    * @returns {}
    * @example
    * // send an action bar message to player
    * jx.text(player, 'England Is My City', true);
    * 
    * // send a scary red message to player
    * // two "&" signs will escape the color code character and display a "&"
    * jx.text(player, '&4&ldie && suffer');
    * 
    * // send a no-color code message
    * jx.text(player, 'you & me are best friends', false);
    */
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
   /**
    * get the type of an object
    * @param {} object the object to classify
    * @returns {}
    * @example
    * // this will be true every time
    * if (jx.ty('yeet') === 'string') {
    *    return true;
    * }
    * 
    * // also covers bukkit/spigot/paper/nms classes
    * jx.ty(server.getWorld('world'));
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
   util: {
      auto: function (object, key, placeholder) {
         return object[key] || (object[key] = placeholder);
      },
      camel: function (text) {
         var pascal = jx.util.pascal(text);
         return pascal[0].toLowerCase() + pascal.slice(1);
      },
      class: function (subject, filter) {
         if (!subject.interfaces) {
            return false;
         }
         var match = false;
         while (subject.interfaces.length && match === false) {
            if (subject.name.contains(filter)) {
               var match = true;
            } else {
               subject = subject.interfaces[0];
            }
         }
         return match;
      },
      close: function (player) {
         return jx.query('@e[sort=nearest,limit=2]', player)[1];
      },
      dist2: function (loc1, loc2) {
         loc1.y = 0;
         loc2.y = 0;
         return jx.util.dist3(loc1, loc2);
      },
      dist3: function (loc1, loc2) {
         loc1 = jx.util.loc(loc1);
         loc2 = jx.util.loc(loc2);
         if (loc1.world.name !== loc2.world.name) {
            return Infinity;
         }
         var deltaX = loc1.x - loc2.x;
         var deltaY = loc1.y - loc2.y;
         var deltaZ = loc1.z - loc2.z;
         return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
      },
      integer: function (roman) {
         roman = roman.toString().toLowerCase();
         var options = {
            i: 1,
            ii: 2,
            iii: 3,
            iv: 4,
            v: 5,
            vi: 6,
            vii: 7,
            viii: 8,
            ix: 9,
            x: 10
         };
         return options[roman] || null;
      },
      json: function (loc) {
         if (!loc.world.name) {
            return loc;
         }
         return { world: loc.world.name, x: loc.x, y: loc.y, z: loc.z, yaw: loc.yaw, pitch: loc.pitch };
      },
      loc: function (json) {
         if (json.world.name) {
            return json;
         }
         var world = server.getWorld(json.world || 'world');
         return new org.bukkit.Location(world, json.x, json.y, json.z, json.yaw || 0, json.pitch || 0);
      },
      merge: function (base) {
         jx.ar(arguments).forEach(function (object) {
            Object.keys(object).forEach(function (key) {
               base[key] = object[key];
            });
         });
      },
      multi: function (script, calls) {
         Object.keys(calls).forEach(function (key) {
            setTimeout(function () {
               script.apply(null, calls[key]);
            }, key);
         });
      },
      pascal: function (text) {
         var array = text.toString().split(' ').map(function (chunk) {
            return chunk[0].toUpperCase() + chunk.slice(1);
         });
         return array.join('');
      },
      roman: function (integer) {
         integer = Number(integer);
         if (integer > 10 || integer < 0) {
            return null;
         } else {
            return [ null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ][integer];
         }
      },
      traverse: function (context, nodes) {
         jx.ar(nodes).forEach(function (node) {
            context = jx.util.auto(context, node, {});
         });
         return context;
      }
   }
};

module.exports.init = function (jx) {
   jx.all(jx.data.player);
   jx.data.store.server.interface = {};
   jx.event.player.click(function (x, inventory, instance, event) {
      var data = jx.data.server('interface');
      var hash = inventory.hashCode().toString();
      if (data[hash]) {
         event.setCancelled(true);
         var item = data[hash][event.slot];
         if (item.event) {
            jx.event.fire(item.event, instance);
         }
         if (item.command) {
            instance.chat(item.command);
         }
      }
   });
   jx.event.player.close(function (x, inventory) {
      var data = jx.data.server('interface');
      var hash = inventory.hashCode().toString();
      if (data[hash]) {
         data[hash] = void 0;
      }
   });
};
