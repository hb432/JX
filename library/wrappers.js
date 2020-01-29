var block = require('./wrappers/block');
var entity = require('./wrappers/entity');
var item = require('./wrappers/item');
module.exports = {
   /**
    * returns the jx-api-based object type string if applicable
    * @param {} object the input object to check
    * @returns {string} returns null if not applicable
    * @example
    * // entity type
    * var type = _(entity);
    * 
    * // switch based on block type
    * switch (_(block)) {
    *    case 'stone':
    *       console.log("he's stoned...");
    *       break;
    * }
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
    * if input is a string, resolve string as an incomplete player name to player object
    * 
    * name is resolved with, first exact match check, then all online players, then all players with server data
    * 
    * if input is an entity, block, or item stack, wrap object in respective wrapper
    * 
    * if object has no associated wrapper, return false
    * @param {} object
    * @returns {} null if no player found or no wrapper applied
    * @example
    * // modify an item
    * $(item).mod({
    *    enchantments: {
    *       looting: 3,
    *       sharpness: 4,
    *       fire_aspect: 2
    *    },
    *    meta: {
    *       unbreakable: true,
    *       displayName: jx.color('&4&l&oThe Power Sword')
    *    }
    * });
    * 
    * // resolve full player name (resolves if player harrix432 is online)
    * console.log($('h').name); // harrix432
    */
   $: function (object) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.wrappers.entity(object);
      } else if (type.contains('.block.')) {
         return jx.wrappers.block(object);
      } else if (type.contains('ItemStack')) {
         return jx.wrappers.item(object);
      } else if (type === 'string') {
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
         if (arg2) {
            var players = jx.data.server('players');
            Object.keys(players).forEach(function (player) {
               var value = players[player];
               if (!match && value.toLowerCase().startsWith(object.toLowerCase())) {
                  match = value;
               }
            });
         }
         if (match) {
            return jx.player(match);
         } else {
            return null;
         }
      } else {
         return null;
      }
   },
   block: block,
   entity: entity,
   item: item
};
