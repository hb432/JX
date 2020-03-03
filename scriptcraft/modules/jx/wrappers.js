var block = require('./wrappers/block.js');
var entity = require('./wrappers/entity.js');
var item = require('./wrappers/item.js');
module.exports = {
   /**
    * returns the object type string if applicable (entities, blocks, and items)
    * @param {*} object the input object to check
    * @returns {string} returns null if not applicable
    * @example
    * // return entity type
    * _(entity);
    */
   _: function (object) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.api.entityType[object.type];
      } else if (type.contains('.block.') || type.contains('ItemStack')) {
         return jx.api.material[object.type];
      } else {
         return null;
      }
   },
   /**
    * if input is an entity, return jx.wrappers.entity(input);
    * 
    * if input is an item, return jx.wrappers.item(input);
    * 
    * if input is a string, check for a prefix
    * 
    * if string prefix is % or mode:, resolve string to server gamemode
    * 
    * if string prefix is @ or world:, resolve string to server world
    * 
    * if string prefix is * or entityT:, resolve string to API entity type
    * 
    * if string prefix is ? or entityR:, resolve string to entity name
    * 
    * if string prefix is ?? or entityS:, do the above and spawn the resolved entity
    * 
    * if string prefix is ??? or entityW:, do the above and wrap the entity in jx.wrappers.entity
    * 
    * if string prefix is # or itemT:, resolve string to API material type
    * 
    * if string prefix is ! or itemR:, resolve string to item name
    * 
    * if string prefix is !! or itemS:, do the above and create the resolved item
    * 
    * if string prefix is !!! or itemW, do the above and wrap the item in jx.wrappers.item
    * 
    * if string prefix is > or event:, resolve string to smart event listener, treat 2nd argument as listener, and treat 3rd argument as an array of filters whose indexes will be applied with jx.util.match(arguments[index], filter[index])
    * 
    * if no string prefix, resolve string to player name, useful for player commands to
    * auto-complete inputted player names or quick access to a player instance
    * 
    * @param {*} object
    * @returns {*}
    * @example
    * // resolve full player name (resolves this way if player 'harrix432' is online with no other "H" names)
    * console.log($('h').name); // harrix432
    * 
    * // spawn a diamond when a player shoots a bow in the overworld while in adventure mode
    * $('>entity.shoot', function (entity) {
    *    entity.world.dropItemNaturally(entity.location, jx.spawn.item('diamond'));
    * }, {
    *    type: $('*player'),
    *    world: server.worlds.get('world'),
    *    gameMode: org.bukkit.GameMode.ADVENTURE
    * });
    */
   $: function (object, arg1, arg2) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.wrappers.entity(object);
      } else if (type.contains('.block.')) {
         return jx.wrappers.block(object);
      } else if (type.contains('ItemStack')) {
         return jx.wrappers.item(object);
      } else if (type === 'string') {
         if (object[0] === '%') {
            return $('mode:' + object.slice(1));
         } else if (object.startsWith('mode:')) {
            var filter = object.slice(5).toUpperCase();
            var match2 = null;
            var values = jx.ar(org.bukkit.GameMode.values());
            if (!isNaN(Number(filter))) {
               return values[filter === '0' ? '1' : filter === '1' ? '0' : filter];
            }
            values.forEach(function (mode) {
               if (!match2 && mode.name() === filter) match2 = mode;
            });
            if (match2) return match2;
            values.forEach(function (mode) {
               if (!match2 && mode.name().contains(filter)) match2 = mode;
            });
            return match2;
         } else if (object[0] === '@') {
            return $('world:' + object.slice(1));
         } else if (object.startsWith('world:')) {
            var filter = object.slice(6).toLowerCase();
            var match3 = null;
            if (!isNaN(Number(filter))) return server.worlds.get(filter);
            server.worlds.forEach(function (world) {
               if (!match3 && world.name.toLowerCase() === filter) match3 = world;
            });
            if (match3) return match3;
            server.worlds.forEach(function (world) {
               if (!match3 && world.name.toLowerCase().contains(filter)) match3 = world;
            });
            if (match3) return match3;
            server.worlds.forEach(function (world) {
               if (!match3 && (world.environment + '').toLowerCase().contains(filter)) {
                  match3 = world;
               }
            });
            if (match3) return match3;
            server.worlds.forEach(function (world) {
               if (!match3 && world.environment == 'NORMAL' && 'overworld'.contains(filter)) {
                  match3 = world;
               }
            });
            return match3;
         } else if (object.startsWith('entityW:')) {
            return $('???' + object.slice(8), arg1);
         } else if (object.startsWith('entityS:')) {
            return $('??' + object.slice(8), arg1);
         } else if (object.startsWith('entityR:')) {
            return $('?' + object.slice(8), arg1);
         } else if (object.startsWith('entityT:')) {
            return $('*' + object.slice(8), arg1);
         } else if (object[0] === '*') {
            return jx.api.entityType[object.slice(1)];
         } else if (object.startsWith('???')) {
            return $($(object.slice(1), arg1));
         } else if (object[0] === '?') {
            var type2 = null;
            var query = object.slice(1).toLowerCase().split(' ').join('_');
            if (object[1] === '?') query = query.slice(1);
            if (jx.api.entityType[query]) {
               return object[1] === '?' ? jx.spawn.entity(query, arg1) : query;
            }
            Object.keys(jx.api.entityType).sort().forEach(function (key) {
               if (type2 === null && key.contains(query)) {
                  type2 = key;
                  if (object[1] === '!') {
                     type2 = jx.spawn.entity(type2, arg1);
                  }
               }
            });
            return type2;
         } else if (object.startsWith('itemW:')) {
            return $('!!!' + object.slice(6), arg1);
         } else if (object.startsWith('itemS:')) {
            return $('!!' + object.slice(6), arg1);
         } else if (object.startsWith('itemR:')) {
            return $('!' + object.slice(6), arg1);
         } else if (object.startsWith('itemT:')) {
            return $('#' + object.slice(6), arg1);
         } else if (object[0] === '#') {
            return jx.api.material[object.slice(1)];
         } else if (object.startsWith('!!!')) {
            return $($(object.slice(1), arg1));
         } else if (object[0] === '!') {
            var type3 = null;
            var query = object.slice(1).toLowerCase().split(' ').join('_');
            if (object[1] === '!') query = query.slice(1);
            if (jx.api.material[query]) {
               return object[1] === '!' ? jx.spawn.item(query, arg1) : query;
            }
            Object.keys(jx.api.material).sort().forEach(function (key) {
               if (type3 === null && key.contains(query)) {
                  type3 = key;
                  if (object[1] === '!') {
                     type3 = jx.spawn.item(type3, arg1);
                  }
               }
            });
            return type3;
         } else if (object[0] === '>') {
            var node = object.slice(1).split('.');
            var smart = jx.event[node[0]][node[1]];
            smart(function () {
               var exit = false;
               try {
                  jx.ar(arguments).forEach(function (arg, index) {
                     if (!jx.util.match(arg, arg2[index])) exit = true;
                  });
               } catch (err) {
                  exit = false;
                  console.log('&4JX: Event Listener Filter Check Failed!');
                  console.log('&7Event Name: ' + object.slice(1));
                  console.log('&7Error Message: ' + err);
               }
               if (exit) return false;
               try {
                  arg1.apply(0, arguments);
               } catch (err) {
                  exit = false;
                  console.log('&4JX: Event Listener Execution Failed!');
                  console.log('&7Event Name: ' + object.slice(1));
                  console.log('&7Error Message: ' + err);
                  console.log('&7Function Code:\n' + arg1);
               }
            });
         } else {
            var match = false;
            jx.all(function (player) {
               if (!match && player.name.toLowerCase() === object.toLowerCase()) {
                  match = object;
               }
            });
            if (!match) {
               jx.all(function (player) {
                  if (!match && player.name.toLowerCase().startsWith(object.toLowerCase())) {
                     match = player.name;
                  }
               });
            }
            var players = jx.data.server('players');
            Object.keys(players).forEach(function (player) {
               var value = players[player];
               if (!match && value.toLowerCase().startsWith(object.toLowerCase())) {
                  match = value;
               }
            });
            if (match) {
               return jx.player(match);
            } else {
               return null;
            }
         }
      } else {
         return null;
      }
   },
   block: block,
   entity: entity,
   item: item
};
