var block = require('./wrappers/block');
var entity = require('./wrappers/entity');
var item = require('./wrapper/item');

module.exports = {
   $: function (object, arg2) {
      var type = jx.ty(object);
      if (type.contains('.entity.')) {
         return jx.entity(object);
      } else if (type.contains('.block.')) {
         return jx.block(object);
      } else if (type.contains('ItemStack')) {
         return jx.item(object);
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
         if (arg2 && !match) {
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
