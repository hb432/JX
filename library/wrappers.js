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
    * if string prefix is !, resolve string to entity name, if none found, resolve to item name
    * 
    * if string prefix is !!, do the above and spawn the resolved entity or item type
    * 
    * if string prefix is !!!, do the above and wrap the item or entity in its respective wrapper
    * 
    * if no string prefix, resolve string to player name, useful for player commands to
    * auto-complete inputted player names or quick access to a player instance
    * 
    * @param {*} object
    * @returns {*}
    * @example
    * // resolve full player name (resolves this way if player 'harrix432' is online)
    * console.log($('h').name); // harrix432
    */
   $: function (object, arg1) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.wrappers.entity(object);
         /*
      } else if (type.contains('.block.')) {
         return jx.wrappers.block(object);
      */
      } else if (type.contains('ItemStack')) {
         return jx.wrappers.item(object);
      } else if (type === 'string') {
         if (object.startsWith('!!!')) {
            return $($(object.slice(1), arg1));
         } else if (object[0] === '!') {
            var type2 = null;
            var query = object.slice(1).toLowerCase().split(' ').join('_');
            if (object[1] === '!') query = query.slice(1);
            if (jx.api.entityType[query]) {
               return object[1] === '!' ? jx.spawn.entity(query, arg1) : query;
            } else if (jx.api.material[query]) {
               return object[1] === '!' ? jx.spawn.item(query) : query;
            }
            Object.keys(jx.api.entityType).sort().forEach(function (key) {
               if (type2 === null && key.contains(query)) {
                  type2 = key;
                  if (object[1] === '!') {
                     type2 = jx.spawn.entity(type2, arg1);
                  }
               }
            });
            if (type2 === null) {
               Object.keys(jx.api.material).sort().forEach(function (key) {
                  if (type2 === null && key.contains(query)) {
                     type2 = key;
                     if (object[1] === '!') {
                        type2 = jx.spawn.item(type2);
                     }
                  }
               });
            }
            return type2;
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
   entity: entity,
   item: item
};
