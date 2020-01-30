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
    * if input is a string, resolve string as an incomplete player name to player object
    * 
    * name is resolved with exact match check, then online players check, then players with server data check
    * 
    * if input is an entity or item stack, wrap object in respective wrapper
    * 
    * if name cannot be resolved or object has no associated wrapper, return null
    * @param {*} object
    * @returns {*}
    * @example
    * // resolve full player name (resolves this way if player 'harrix432' is online)
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
      } else {
         return null;
      }
   },
   entity: entity,
   item: item
};
